import { StoryObj, Meta } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {
    bgColor: {
      control: { type: "radio" },
      options: ["orange", "light-gray", "dark-gray"],
    },
    type: {
      control: { type: "select" },
      options: ["normal", "long"],
    },
  },
};

type Story = StoryObj<typeof meta>;

export const NormalButton: Story = {
  args: {
    text: "1",
    bgColor: "orange",
  },
};

export const LongButton: Story = {
  args: {
    text: "0",
    bgColor: "dark-gray",
    type: "long",
  },
};

export default meta;
