export type LoremIpsumGeneratorProps = (
  length: number,
  result?: string | undefined,
) => string

export type TextGeneratorHookProps = () => {
  loremIpsumGenerator: LoremIpsumGeneratorProps
}
