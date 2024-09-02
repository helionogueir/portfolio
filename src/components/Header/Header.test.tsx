import Header, { type HeaderProps } from '.'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@app/application/Test/testing-library/react'
import i18next from '@app/application/Locale/useTranslation'

const appTitle = i18next.t('configs:app.name')

const renderComponent = (props: HeaderProps) => {
  render(<Header {...props} />)
}

describe('Should test components/Header', () => {
  test('Should render components/Header with "title"', () => {
    const props: HeaderProps = { title: 'Header Title' }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading', {
      name: `${appTitle} | ${props.title}`,
    })

    expect(titleComponent).toBeInTheDocument()
  })

  test('Should render components/Header with "title and subtitle"', () => {
    const props: HeaderProps = {
      title: 'Header Title',
      subtitle: 'Header Subtitle',
    }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading', {
      name: `${appTitle} | ${props.title}`,
    })

    expect(titleComponent).toBeInTheDocument()

    const subTitleComponent = screen.getByText(props.subtitle || '')

    expect(subTitleComponent).toBeInTheDocument()
  })

  test('Should render components/Header with "title", where the "title" is iguals the app name', () => {
    const props: HeaderProps = { title: appTitle }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading', {
      name: props.title,
    })

    expect(titleComponent).toBeInTheDocument()
  })

  test('Should render components/Header with "title", where the "title" is empty', () => {
    const props: HeaderProps = { title: '' }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading', {
      name: appTitle,
    })

    expect(titleComponent).toBeInTheDocument()
  })
})
