import type { Meta, StoryObj } from "@storybook/react"
import Avatar from "./"

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
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
        options: ["small", "medium"],
      },
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <Avatar {...args} />
  },
}
