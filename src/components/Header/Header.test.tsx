import Header, { type HeaderProps } from '.'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@app/configs/test/testing-library/react'
import i18next from '@app/repositories/Locale/useTranslation'

const appTitle = i18next.t('system:app.name')

const renderComponent = (props: HeaderProps) => {
  render(<Header {...props} />)
}

describe('Should test components/Header', () => {
  test('Should render components/Header with "title"', () => {
    const props: HeaderProps = { title: `${appTitle} | Header Title` }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading-title', {
      name: props.title,
    })

    expect(titleComponent).toBeInTheDocument()
  })

  test('Should render components/Header with "title and subtitle"', () => {
    const props: HeaderProps = {
      title: `${appTitle} | Header Title`,
      subtitle: 'Header Subtitle',
    }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading-title', {
      name: props.title,
    })

    expect(titleComponent).toBeInTheDocument()

    const subTitleComponent = screen.getByRole('heading-subtitle', {
      name: props.subtitle,
    })

    expect(subTitleComponent).toBeInTheDocument()
  })

  test('Should render components/Header with "title", where the "title" is iguals the app name', () => {
    const props: HeaderProps = { title: appTitle }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading-title', {
      name: props.title,
    })

    expect(titleComponent).toBeInTheDocument()
  })

  test('Should render components/Header with "title", where the "title" is empty', () => {
    const props: HeaderProps = { title: '' }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading-title', {
      name: props.title,
    })

    expect(titleComponent).toBeInTheDocument()
  })
})
