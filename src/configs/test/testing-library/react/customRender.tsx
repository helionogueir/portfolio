// eslint-disable-next-line no-restricted-imports
import { type RenderOptions, render } from '@testing-library/react'
import type { ReactElement } from 'react'
import StyledComponentsProvider from '@app/configs/style/styled-components/StyledComponentsProvider'

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <StyledComponentsProvider>{children}</StyledComponentsProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export { customRender }
