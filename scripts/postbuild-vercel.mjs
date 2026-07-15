#!/usr/bin/env node
/**
 * Post-build script for Vercel Build Output API.
 *
 * Vercel deploys ONLY the contents of `.vercel/output/functions/__hono.func/`
 * — it does NOT run npm install for the function. Since `firebase-admin` is
 * kept external by the bundler (bundling it breaks protobufjs file loading),
 * the package tree must physically exist inside the function's node_modules,
 * otherwise the function crashes with ERR_MODULE_NOT_FOUND at runtime.
 */
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { copyExternalsIntoFunction } from './copy-externals.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ok = copyExternalsIntoFunction(ROOT)
if (!ok) process.exit(1)
