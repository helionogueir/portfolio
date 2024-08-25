import type { BaseProps } from './Base'
import type { PaletteProps } from './Palette'

export type ColorType = `#${Lowercase<string>}`
export type SizeType = `${number}rem`

export type MediaScreenStartType =
  `@media only screen and (${'min' | 'max'}-width: ${number}rem)`

export type MediaScreenStartAndEndType =
  `@media only screen and (min-width: ${number}rem) and (max-width: ${number}rem)`

export type ThemeProps = BaseProps & { palette: PaletteProps }
