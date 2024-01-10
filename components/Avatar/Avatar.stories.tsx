import type { Meta, StoryObj } from "@storybook/react"
import Avatar from "./"

const meta = {
  title: "Components/Avatar",
  component: Avatar,

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
    size: "medium",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
  },
  parameters: {
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
