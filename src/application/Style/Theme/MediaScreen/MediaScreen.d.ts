import type {
  MediaScreenStartAndEndType,
  MediaScreenStartType,
} from '@app/application/Style/Theme'

export type MediaScreenProps = {
  extraSmall: MediaScreenStartType | MediaScreenStartAndEndType
  small: MediaScreenStartType | MediaScreenStartAndEndType
  medium: MediaScreenStartType | MediaScreenStartAndEndType
  large: MediaScreenStartType | MediaScreenStartAndEndType
}
