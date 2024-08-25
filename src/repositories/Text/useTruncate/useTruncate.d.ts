import type { TrucatesSize } from '../Text'

export type TrucateTextByLimitProps = (
  text: string,
  limit: TrucatesSize,
) => string

export type TrucateHookProps = () => {
  trucateTextByLimit: TrucateTextByLimitProps
}
