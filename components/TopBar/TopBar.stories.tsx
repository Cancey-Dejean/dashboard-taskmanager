import type { Meta, StoryObj } from "@storybook/react"
import TopBar from "./"

const meta = {
  title: "Sections/TopBar",
  component: TopBar,
  args: {},
  decorators: [
    (Story) => (
      <div className=" max-w-[1774px] mx-auto w-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <TopBar {...args} />
  },
}
