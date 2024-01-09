import type { Meta, StoryObj } from "@storybook/react"
import SidebarHeader from "./"

const meta = {
  title: "Components/SidebarHeader",
  component: SidebarHeader,
  args: {},
  decorators: [
    (Story) => (
      <div className="max-w-[366px] mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SidebarHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <SidebarHeader {...args} />
  },
}
