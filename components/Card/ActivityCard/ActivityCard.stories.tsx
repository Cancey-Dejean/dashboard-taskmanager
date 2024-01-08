import type { Meta, StoryObj } from "@storybook/react"
import ActivityCard from "./"

const meta = {
  title: "Components/ActivityCard",
  component: ActivityCard,
  args: {
    userImg: "https://picsum.photos/200",
    userName: "John Doe",
    title: "Your Title Here",
    text: "Lorem ipsum dolor sit amet Eius nobis dolorum, minima ad quas omnis est alias iure facilis corporis unde ullam commodi numquam cupiditate aliquid accusamus quasi eos nam. Expedita veniam sequi quia esse temporibus excepturi nesciunt, eligendi alias eius minus provident iste sunt harum nemo.",
  },
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
} satisfies Meta<typeof ActivityCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <ActivityCard {...args} />
  },
}
