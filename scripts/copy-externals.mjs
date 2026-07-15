/**
 * Copies externalized server packages (firebase-admin + full transitive
 * dependency tree) into the Vercel function directory so they exist at
 * runtime in /var/task. Exported as a function so it can run both as a
 * Vite plugin hook (closeBundle) and as a standalone postbuild script.
 */
import { existsSync, mkdirSync, readFileSync, cpSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'

export const EXTERNAL_PACKAGES = ['firebase-admin']

export function copyExternalsIntoFunction(rootDir, log = console.log) {
  const ROOT_NM = join(rootDir, 'node_modules')
  const FUNC_DIR = join(rootDir, '.vercel', 'output', 'functions', '__hono.func')
  const FUNC_NM = join(FUNC_DIR, 'node_modules')

  if (!existsSync(FUNC_DIR)) {
    log(`✗ Function directory not found: ${FUNC_DIR} — skipping externals copy`)
    return false
  }

  const readPkgJson = (dir) => {
    try {
      return JSON.parse(readFileSync(join(dir, 'package.json'), 'utf-8'))
    } catch {
      return null
    }
  }

  // Resolve like Node: nested node_modules first, then root
  const resolvePkgDir = (pkgName, fromDir) => {
    const nested = join(fromDir, 'node_modules', pkgName)
    if (existsSync(join(nested, 'package.json'))) return nested
    const root = join(ROOT_NM, pkgName)
    if (existsSync(join(root, 'package.json'))) return root
    return null
  }

  const toCopy = new Map()
  const queue = EXTERNAL_PACKAGES.map((name) => ({ name, fromDir: rootDir }))
  const missing = []

  while (queue.length > 0) {
    const { name, fromDir } = queue.shift()
    if (toCopy.has(name)) continue

    const pkgDir = resolvePkgDir(name, fromDir)
    if (!pkgDir) {
      missing.push(name)
      continue
    }
    toCopy.set(name, pkgDir)

    const pkg = readPkgJson(pkgDir)
    if (!pkg) continue

    const deps = { ...(pkg.dependencies || {}), ...(pkg.optionalDependencies || {}) }
    for (const depName of Object.keys(deps)) {
      if (!toCopy.has(depName)) queue.push({ name: depName, fromDir: pkgDir })
    }
  }

  if (missing.length > 0) {
    log(`⚠ Skipped (not installed, likely optional): ${missing.join(', ')}`)
  }

  rmSync(FUNC_NM, { recursive: true, force: true })
  mkdirSync(FUNC_NM, { recursive: true })

  let count = 0
  for (const [name, srcDir] of toCopy) {
    const destDir = join(FUNC_NM, name)
    mkdirSync(dirname(destDir), { recursive: true })
    cpSync(srcDir, destDir, { recursive: true, dereference: true })
    count++
  }

  log(`✓ Copied ${count} packages into ${FUNC_NM}`)
  log(`  Externals bundled for runtime: ${EXTERNAL_PACKAGES.join(', ')}`)
  return true
}
