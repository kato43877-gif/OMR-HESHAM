/**
 * Backend validation utilities for Omar Hesham Foundation.
 * Provides input sanitization and field validation functions.
 */

/**
 * Validates email format.
 */
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email.trim())
}

/**
 * Validates Egyptian phone number (01xxxxxxxxx).
 */
export const validatePhone = (phone: string): boolean => {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '')
  // Egyptian phone: starts with 01, followed by 0/1/2/5, then 8 digits
  const regex = /^(\+?2)?01[0125]\d{8}$/
  return regex.test(cleaned)
}

/**
 * Validates that required fields are present and non-empty.
 */
export const validateRequired = (fields: Record<string, any>, requiredKeys: string[]): string[] => {
  const errors: string[] = []
  for (const key of requiredKeys) {
    const value = fields[key]
    if (value === undefined || value === null || (typeof value === 'string' && !value.trim())) {
      errors.push(`الحقل "${key}" مطلوب`)
    }
  }
  return errors
}

/**
 * Validates that an amount is a positive number.
 */
export const validateAmount = (amount: any): { valid: boolean; value: number } => {
  const num = Number(amount)
  if (isNaN(num) || num <= 0) {
    return { valid: false, value: 0 }
  }
  return { valid: true, value: num }
}

/**
 * Sanitizes input text to prevent XSS and HTML injection.
 * Strips HTML tags and encodes special characters.
 */
export const sanitizeInput = (text: string): string => {
  if (!text) return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
}

/**
 * Sanitizes an object's string values.
 */
export const sanitizeObject = (obj: Record<string, any>): Record<string, any> => {
  const sanitized: Record<string, any> = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value)
    } else {
      sanitized[key] = value
    }
  }
  return sanitized
}

/**
 * Validates a UUID format.
 */
export const validateUUID = (id: string): boolean => {
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  return regex.test(id)
}

/**
 * Validates that text length is within bounds.
 */
export const validateLength = (text: string, min: number, max: number): boolean => {
  const len = text.trim().length
  return len >= min && len <= max
}
