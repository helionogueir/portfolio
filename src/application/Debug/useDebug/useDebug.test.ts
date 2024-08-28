import { describe, expect, test, vi } from 'vitest'
import { renderHook } from '@app/application/Test/testing-library/react'
import { useDebug } from '@app/application/Debug/useDebug'

const mountHook = () => renderHook(() => useDebug())

describe('Should test application/debug/useDebug', () => {
  test('Should call info with the "data" object', () => {
    const { result } = mountHook()
    const infoSpy = vi.spyOn(result.current, 'info')
    const data = { message: 'info message test' }

    result.current.info(data)
    expect(infoSpy).toHaveBeenCalledTimes(1)
    expect(infoSpy).toHaveBeenCalledWith(data)
  })

  test('Should call warn with the "data" object', () => {
    const { result } = mountHook()
    const warnSpy = vi.spyOn(result.current, 'warn')
    const data = { message: 'warn message test' }

    result.current.warn(data)
    expect(warnSpy).toHaveBeenCalledTimes(1)
    expect(warnSpy).toHaveBeenCalledWith(data)
  })

  test('Should call error with the "data" object', () => {
    const { result } = mountHook()
    const errorSpy = vi.spyOn(result.current, 'error')
    const data = { message: 'error message test' }

    result.current.error(data)
    expect(errorSpy).toHaveBeenCalledTimes(1)
    expect(errorSpy).toHaveBeenCalledWith(data)
  })
})
