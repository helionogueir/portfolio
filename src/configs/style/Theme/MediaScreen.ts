import type { MediaScreenProps } from './Theme.d'

const MediaScreen: MediaScreenProps = {
  // <= 767px
  extraSmall: '@media only screen and (max-width: 76.7rem)',
  // >= 768px
  small: '@media only screen and (min-width: 76.8rem)',
  // >= 1024 && <= 1439
  medium:
    '@media only screen and (min-width: 102.4rem) and (max-width: 143.9rem)',
  // >= 1440px
  large: '@media only screen and (min-width: 144rem)',
}

export default MediaScreen
