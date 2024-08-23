export type DataProps = {
  message: string
}

export type LogProps = (data: DataProps) => void

export type DebugHookProps = () => {
  info: LogProps
  warn: LogProps
  error: LogProps
}
