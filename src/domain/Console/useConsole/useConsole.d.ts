export type LogProps = (data: Record<string, mixed>) => void

export type ConsoleHookProps = () => {
  info: LogProps
  warn: LogProps
  error: LogProps
}
