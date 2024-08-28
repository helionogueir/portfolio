import type { Meta, StoryObj } from '@storybook/react'
import Header from '@app/components/Header'
import { loremIpsumGenerator } from '@app/application/Text/useTextGenerator'

const meta = {
  title: 'componets/Header',
  component: Header,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    title: 'Header Title Example',
    subtitle: loremIpsumGenerator(1024),
  },
}
