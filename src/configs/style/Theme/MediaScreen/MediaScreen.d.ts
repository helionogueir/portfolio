import type {
  MediaScreenStartAndEndType,
  MediaScreenStartType,
} from '../Theme.d'

export type MediaScreenProps = {
  extraSmall: MediaScreenStartType | MediaScreenStartAndEndType
  small: MediaScreenStartType | MediaScreenStartAndEndType
  medium: MediaScreenStartType | MediaScreenStartAndEndType
  large: MediaScreenStartType | MediaScreenStartAndEndType
}
