import type { Meta, StoryObj } from '@storybook/react'
import Header from '@app/components/Header'
import { loremIpsumGenerator } from '@app/application/Text/useTextGenerator'

const meta = {
  title: 'componets/Header',
  component: Header,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderWithTitleAndSubtitle: Story = {
  name: 'Header with "Title" and "Subtitle"',
  args: {
    title: 'Header Title Example',
    subtitle: loremIpsumGenerator(1024),
  },
}

export const HeaderWithoutSubtitle: Story = {
  name: 'Header without "Subtitle"',
  args: {
    title: 'Header Title Example',
    subtitle: '',
  },
}

export const HeaderWithEmptyTitle: Story = {
  name: 'Header with empty "Title"',
  args: {
    title: '',
    subtitle: '',
  },
}
