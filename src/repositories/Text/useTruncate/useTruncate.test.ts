import { describe, expect, test, vi } from 'vitest'
import { TrucatesSize } from '../Text.enum'
import { renderHook } from '@app/configs/test/testing-library/react'
import { useTruncate } from './useTruncate'

const mountHook = () => renderHook(() => useTruncate())

const text = 'Lorem ipsum '

const textGenerated = (length: number, value: string | undefined = '') => {
  if (value.length >= length) return value.slice(0, length)

  return textGenerated(length, `${value}${text}`)
}

describe('Should test repositories/debug/useTruncate', () => {
  test('Should return "text", after call trucateTextByLimit', () => {
    const { result } = mountHook()
    const trucateTextByLimitSpy = vi.spyOn(result.current, 'trucateTextByLimit')
    const text = textGenerated(TrucatesSize.TRUNCATE_TITLE_DESCRIPTION_LIMIT)
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
    const text = textGenerated(
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
    expect(value).toBe(`${textGenerated(253)}...`)
  })
})
