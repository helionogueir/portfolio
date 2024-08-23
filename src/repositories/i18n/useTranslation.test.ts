import { describe, expect, test, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useTranslation } from './useTranslation'

describe('Should test repositories/debug/useTranslation', () => {
  test('Should execute t function', () => {
    const { result } = renderHook(() => useTranslation())
    const tSpy = vi.spyOn(result.current, 't')
    const translation = 'common:app.title'
    const value = result.current.t(translation)

    expect(tSpy).toHaveBeenCalledTimes(1)
    expect(tSpy).toHaveBeenCalledWith(translation)
    expect(value).toBeTypeOf('string')
  })

  test('Should test language value', () => {
    const { result } = renderHook(() => useTranslation())
    const value = result.current.language

    expect(value.length).toBeGreaterThanOrEqual(2)
    expect(value).toBeTypeOf('string')
  })
})
