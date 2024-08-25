import type { TrucateHookProps, TrucateTextByLimitProps } from './useTruncate.d'
import { truncate } from 'lodash'

export const useTruncate: TrucateHookProps = () => {
  const trucateTextByLimit: TrucateTextByLimitProps = (text, limit) =>
    truncate(text, { length: limit, omission: '...' })

  return { trucateTextByLimit }
}
