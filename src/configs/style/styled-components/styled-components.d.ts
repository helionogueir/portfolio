import type { ThemeProps } from '../Theme/Theme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeProps {}
}

export type StyledComponentsProviderProps = {
  children: React.ReactNode | JSX.Element
}
