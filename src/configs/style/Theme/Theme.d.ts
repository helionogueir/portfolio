import Theme from './Theme'

type Theme = typeof Theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

export type SizingProps = {
  xxSmall: string;
  xSmall: string;
  small: string;
  regular: string;
  large: string;
  xLarge: string;
  xxLarge: string;
}

export type WeightProps = {
  thin: number;
  light: number;
  regular: number;
  bold: number;
  bolder: number;
}
