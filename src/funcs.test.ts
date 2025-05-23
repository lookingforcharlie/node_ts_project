import { describe, expect, it, test } from 'vitest'
import { calculateWordValue, explosion, getLanguagesAbove60 } from './jsfuncs'

describe('calculateWordValue', () => {
  it('should return the correct value for the word "love"', () => {
    expect(calculateWordValue('love')).toBe(54)
  })

  it('should return the correct value for the word "friendship"', () => {
    expect(calculateWordValue('friendship')).toBe(108)
  })

  it('should return the correct value for the word "a"', () => {
    expect(calculateWordValue('a')).toBe(1)
  })

  it('this test should fail', () => {
    expect(false).toBe(true)
  })
})
