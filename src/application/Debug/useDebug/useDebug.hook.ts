import type {
  DebugHookProps,
  LogProps,
} from '@app/application/Debug/useDebug/useDebug.d'
import { useConsole } from '@app/domain/Console/useConsole'

export const useDebug: DebugHookProps = () => {
  const displayConosle = useConsole()
  const info: LogProps = (data) => displayConosle.info(data)
  const warn: LogProps = (data) => displayConosle.warn(data)
  const error: LogProps = (data) => displayConosle.error(data)

  return { info, warn, error }
}
