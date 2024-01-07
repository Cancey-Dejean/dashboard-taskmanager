import type { Meta, StoryObj } from "@storybook/react"
import SidebarHeader from "./"

const meta = {
  title: "Components/SidebarHeader",
  component: SidebarHeader,
  args: {
    // logo: <GoFundMe />,
    // navPrimary: navPrimary,
    // navSecondary: navSecondary,
    // logoLeft: false,
    // headerAnimation: false,
  },
  decorators: [
    (Story) => (
      <div className="min-w-[366px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // logo: {
    //   control: false,
    // },
    // logoLeft: {
    //   control: { type: "boolean" },
    // },
    // headerAnimation: {
    //   control: { type: "boolean" },
    // },
  },
} satisfies Meta<typeof SidebarHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <SidebarHeader {...args} />
  },
}
