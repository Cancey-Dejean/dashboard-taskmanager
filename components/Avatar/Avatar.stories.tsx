import type { Meta, StoryObj } from "@storybook/react"
import Avatar from "./"

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="py-20 flex justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    imgSrc: "https://dummyimage.com/64x64.png/C4C4C4/000000",
    name: "Name",
  },
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  render: (args) => {
    return <Avatar size="small" {...args} />
  },
}

export const Medium: Story = {
  render: (args) => {
    return <Avatar size="medium" {...args} />
  },
}

export const Large: Story = {
  render: (args) => {
    return <Avatar size="large" {...args} />
  },
}
