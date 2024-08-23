import { describe, expect, test, vi } from 'vitest'
import i18next from '@app/repositories/i18n/useTranslation'
import { renderHook } from '@testing-library/react'
import { useDocumentTitle } from './useDocumentTitle'

const appTitle = i18next.t('common:app.title')

describe('Should test repositories/debug/useDocumentTitle', () => {
  test('Should execute changeDocumentTitle function', () => {
    const { result } = renderHook(() => useDocumentTitle())
    const changeDocumentTitleSpy = vi.spyOn(
      result.current,
      'changeDocumentTitle',
    )
    const title = 'Document Title Test'
    const value = result.current.changeDocumentTitle(title)

    expect(changeDocumentTitleSpy).toHaveBeenCalledTimes(1)
    expect(changeDocumentTitleSpy).toHaveBeenCalledWith(title)
    expect(value).toBeTypeOf('string')
    expect(value).toBe(`${appTitle} | ${title}`)
  })

  test('Should execute changeDocumentTitle function, where the title is iguals the app name', () => {
    const { result } = renderHook(() => useDocumentTitle())
    const changeDocumentTitleSpy = vi.spyOn(
      result.current,
      'changeDocumentTitle',
    )
    const value = result.current.changeDocumentTitle(appTitle)

    expect(changeDocumentTitleSpy).toHaveBeenCalledTimes(1)
    expect(changeDocumentTitleSpy).toHaveBeenCalledWith(appTitle)
    expect(value).toBeTypeOf('string')
    expect(value).toBe(appTitle)
  })

  test('Should execute changeDocumentTitle function, where the title is empty', () => {
    const { result } = renderHook(() => useDocumentTitle())
    const changeDocumentTitleSpy = vi.spyOn(
      result.current,
      'changeDocumentTitle',
    )
    const value = result.current.changeDocumentTitle('')

    expect(changeDocumentTitleSpy).toHaveBeenCalledTimes(1)
    expect(changeDocumentTitleSpy).toHaveBeenCalledWith('')
    expect(value).toBeTypeOf('string')
    expect(value).toBe(appTitle)
  })
})
