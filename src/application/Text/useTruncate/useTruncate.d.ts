import type { TrucatesSize } from '@app/application/Text'

export type TrucateTextByLimitProps = (
  text: string,
  limit: TrucatesSize,
) => string

export type TrucateHookProps = () => {
  trucateTextByLimit: TrucateTextByLimitProps
}
