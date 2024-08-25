import type {
  LoremIpsumGeneratorProps,
  TextGeneratorHookProps,
} from './useTextGenerator.d'

const text = 'Lorem ipsum dolor sit amet consectetur adipiscing elit quis'

export const loremIpsumGenerator: LoremIpsumGeneratorProps = (
  length,
  value = '',
) => {
  if (value.length >= length) return value.slice(0, length)

  return loremIpsumGenerator(length, `${value}${text}`)
}

export const useTextGenerator: TextGeneratorHookProps = () => ({
  loremIpsumGenerator,
})
