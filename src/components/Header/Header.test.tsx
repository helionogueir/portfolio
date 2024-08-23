import Header, { type HeaderProps } from '.'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import i18next from '@app/repositories/i18n/useTranslation'

const appTitle = i18next.t('common:app.title')

const renderComponent = (props: HeaderProps) => {
  render(<Header {...props} />)
}

describe('Success tests', () => {
  test('Should render components/Header title', () => {
    const props: HeaderProps = { title: `${appTitle} | Header Title` }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading', { name: props.title })

    expect(titleComponent).toBeInTheDocument()
  })

  test('Should render components/Header title and subtitle', () => {
    const props: HeaderProps = {
      title: `${appTitle} | Header Title`,
      subtitle: 'Header Subtitle',
    }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading', { name: props.title })

    expect(titleComponent).toBeInTheDocument()

    const subTitleComponent = screen.getByRole('heading', {
      name: props.subtitle,
    })

    expect(subTitleComponent).toBeInTheDocument()
  })

  test('Should render components/Header title, where the title is iguals the app name', () => {
    const props: HeaderProps = { title: i18next.t('common:app.title') }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading', { name: props.title })

    expect(titleComponent).toBeInTheDocument()
  })

  test('Should render components/Header title, where the title is empty', () => {
    const props: HeaderProps = { title: '' }

    renderComponent(props)

    const titleComponent = screen.getByRole('heading', { name: props.title })

    expect(titleComponent).toBeInTheDocument()
  })
})
