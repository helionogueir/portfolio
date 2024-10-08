import { describe, expect, test, vi } from 'vitest'
import i18next from '@app/application/Locale/useTranslation'
import { renderHook } from '@app/application/Test/testing-library/react'
import { usePageTitle } from '@app/application/Text/usePageTitle'

const appTitle = i18next.t('configs:app.name')

const mountHook = () => renderHook(() => usePageTitle())

describe('Should test application/Text/usePageTitle', () => {
  test('Should return "title", after call changeDocumentTitle function', () => {
    const { result } = mountHook()

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

  test('Should "title and app name" be iguals, after call changeDocumentTitle', () => {
    const { result } = mountHook()

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

  test('Should return "app name", after call changeDocumentTitle with "title" iguals empty', () => {
    const { result } = mountHook()

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
