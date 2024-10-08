import type { ThemeProps } from '@app/application/Style/Theme/Theme.d'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeProps {}
}

export type StyledComponentsProviderProps = {
  children: React.ReactNode | JSX.Element
}
