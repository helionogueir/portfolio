import { describe, expect, test, vi } from 'vitest'
import { renderHook } from '@app/configs/test/testing-library/react'
import { useTextGenerator } from './useTextGenerator'

const mountHook = () => renderHook(() => useTextGenerator())

describe('Should test repositories/Text/useTextGenerator', () => {
  test('Should return text "lorem ipsum" with exacly "length", after call loremIpsumGenerator', () => {
    const { result } = mountHook()
    const loremIpsumGeneratorSpy = vi.spyOn(
      result.current,
      'loremIpsumGenerator',
    )
    const lengthValue = 64
    const value = result.current.loremIpsumGenerator(lengthValue)

    expect(loremIpsumGeneratorSpy).toHaveBeenCalledTimes(1)
    expect(loremIpsumGeneratorSpy).toHaveBeenCalledWith(lengthValue)
    expect(value.length).toBe(lengthValue)
  })
})
