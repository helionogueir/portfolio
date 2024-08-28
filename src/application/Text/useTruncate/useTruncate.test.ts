import { describe, expect, test, vi } from 'vitest'
import { TrucatesSize } from '@app/application/Text'
import { loremIpsumGenerator } from '@app/application/Text/useTextGenerator'
import { renderHook } from '@app/application/Test/testing-library/react'
import { useTruncate } from '@app/application/Text/useTruncate'

const mountHook = () => renderHook(() => useTruncate())

describe('Should test application/Text/useTruncate', () => {
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
