import { describe, expect, test, vi } from 'vitest'
import { renderHook } from '@app/configs/test/testing-library/react'
import { useTranslation } from './useTranslation'

const mountHook = () => renderHook(() => useTranslation())

describe('Should test repositories/debug/useTranslation', () => {
  test('Should return "translation", after call t', () => {
    const { result } = mountHook()
    const tSpy = vi.spyOn(result.current, 't')
    const translation = 'system:app.name'
    const value = result.current.t(translation)

    expect(tSpy).toHaveBeenCalledTimes(1)
    expect(tSpy).toHaveBeenCalledWith(translation)
    expect(value).toBeTypeOf('string')
  })

  test('Should return "language", after get language', () => {
    const { result } = mountHook()
    const value = result.current.language

    expect(value.length).toBeGreaterThanOrEqual(2)
    expect(value).toBeTypeOf('string')
  })
})
