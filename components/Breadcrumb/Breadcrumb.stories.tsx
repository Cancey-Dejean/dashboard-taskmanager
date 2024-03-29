import type { Meta, StoryObj } from "@storybook/react"
import Breadcrumb from "./"

const meta = {
  title: "Sections/Breadcrumb",
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
  args: {},
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <Breadcrumb {...args} />
  },
}
