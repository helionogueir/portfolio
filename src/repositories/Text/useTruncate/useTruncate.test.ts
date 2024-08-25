import { describe, expect, test, vi } from 'vitest'
import { TrucatesSize } from '../Text.enum'
import { loremIpsumGenerator } from '../useTextGenerator'
import { renderHook } from '@app/configs/test/testing-library/react'
import { useTruncate } from './useTruncate'

const mountHook = () => renderHook(() => useTruncate())

describe('Should test repositories/Text/useTruncate', () => {
  test('Should return "text", after call trucateTextByLimit', () => {
    const { result } = mountHook()
    const trucateTextByLimitSpy = vi.spyOn(result.current, 'trucateTextByLimit')
    const text = loremIpsumGenerator(
      TrucatesSize.TRUNCATE_TITLE_DESCRIPTION_LIMIT,
    )
    const value = result.current.trucateTextByLimit(
      text,
      TrucatesSize.TRUNCATE_TITLE_DESCRIPTION_LIMIT,
    )

    expect(trucateTextByLimitSpy).toHaveBeenCalledTimes(1)
    expect(trucateTextByLimitSpy).toHaveBeenCalledWith(
      text,
      TrucatesSize.TRUNCATE_TITLE_DESCRIPTION_LIMIT,
    )
    expect(value).toBe(text)
  })

  test('Should return "text...", after call trucateTextByLimit', () => {
    const { result } = mountHook()
    const trucateTextByLimitSpy = vi.spyOn(result.current, 'trucateTextByLimit')
    const text = loremIpsumGenerator(
      TrucatesSize.TRUNCATE_TITLE_DESCRIPTION_LIMIT + 1,
    )
    const value = result.current.trucateTextByLimit(
      text,
      TrucatesSize.TRUNCATE_TITLE_DESCRIPTION_LIMIT,
    )

    expect(trucateTextByLimitSpy).toHaveBeenCalledTimes(1)
    expect(trucateTextByLimitSpy).toHaveBeenCalledWith(
      text,
      TrucatesSize.TRUNCATE_TITLE_DESCRIPTION_LIMIT,
    )
    expect(value).toBe(`${loremIpsumGenerator(253)}...`)
  })
})
