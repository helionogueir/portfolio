import type { BorderProps } from '@app/application/Style/Theme/Border'
import type { MediaScreenProps } from '@app/application/Style/Theme/MediaScreen'
import type { SizingProps } from '@app/application/Style/Theme/Sizing'
import type { SpacingProps } from '@app/application/Style/Theme/Spacing'
import type { WeightProps } from '@app/application/Style/Theme/Weight'

export type BaseProps = {
  border: BorderProps
  mediaScreen: MediaScreenProps
  sizing: SizingProps
  spacing: SpacingProps
  weight: WeightProps
}
