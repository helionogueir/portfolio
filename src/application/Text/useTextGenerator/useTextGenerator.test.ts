import { describe, expect, test, vi } from 'vitest'
import { renderHook } from '@app/application/Test/testing-library/react'
import { useTextGenerator } from '@app/application/Text/useTextGenerator'

const mountHook = () => renderHook(() => useTextGenerator())

describe('Should test application/Text/useTextGenerator', () => {
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
