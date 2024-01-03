import type { Meta, StoryObj } from "@storybook/react"
import SidebarNav from "./"

const meta = {
  title: "Sections/SidebarNav",
  component: SidebarNav,
  args: {
    // logo: <GoFundMe />,
    // navPrimary: navPrimary,
    // navSecondary: navSecondary,
    // logoLeft: false,
    // headerAnimation: false,
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
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
} satisfies Meta<typeof SidebarNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <SidebarNav {...args} />
  },
}
