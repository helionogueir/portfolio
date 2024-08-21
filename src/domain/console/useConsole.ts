import type { ConsoleHookProps } from './useConsole.d'
import debug from './console'

export const useConsole: ConsoleHookProps = () => {
  return { ...debug }
}
