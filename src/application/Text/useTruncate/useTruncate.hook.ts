import type {
  TrucateHookProps,
  TrucateTextByLimitProps,
} from '@app/application/Text/useTruncate'
import { truncate } from 'lodash'

export const useTruncate: TrucateHookProps = () => {
  const trucateTextByLimit: TrucateTextByLimitProps = (text, limit) =>
    truncate(text, { length: limit, omission: '...' })

  return { trucateTextByLimit }
}
