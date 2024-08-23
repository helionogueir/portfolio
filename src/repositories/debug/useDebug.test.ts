import { describe, expect, test, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useDebug } from './useDebug'

describe('Should test repositories/debug/useDebug', () => {
  test('Should execute info function', () => {
    const { result } = renderHook(() => useDebug())
    const infoSpy = vi.spyOn(result.current, 'info')
    const data = { message: 'info message test' }

    result.current.info(data)
    expect(infoSpy).toHaveBeenCalledTimes(1)
    expect(infoSpy).toHaveBeenCalledWith(data)
  })

  test('Should execute warn function', () => {
    const { result } = renderHook(() => useDebug())
    const warnSpy = vi.spyOn(result.current, 'warn')
    const data = { message: 'warn message test' }

    result.current.warn(data)
    expect(warnSpy).toHaveBeenCalledTimes(1)
    expect(warnSpy).toHaveBeenCalledWith(data)
  })

  test('Should execute error function', () => {
    const { result } = renderHook(() => useDebug())
    const errorSpy = vi.spyOn(result.current, 'error')
    const data = { message: 'error message test' }

    result.current.error(data)
    expect(errorSpy).toHaveBeenCalledTimes(1)
    expect(errorSpy).toHaveBeenCalledWith(data)
  })
})
