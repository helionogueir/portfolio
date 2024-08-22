import type { ConsoleHookProps } from './useConsole.d'
import type { LogProps } from './useConsole.d'

const info: LogProps = (data) => console.info(
  '%c %s ',
  'color:black;background:#cdddea;',
  'info', data
)

const warn: LogProps = (data) => console.warn(
  '%c %s ',
  'color:black;background:#ffd700;',
  'warn', data
)

const error: LogProps = (data) => console.error(
  '%c %s ',
  'color:black;background:#d99cb5;',
  'error', data
)

export const useConsole: ConsoleHookProps = () => {
  return { info, warn, error }
}

export default { info, warn, error }
