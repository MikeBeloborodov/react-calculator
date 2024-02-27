import { StoryObj, Meta } from "@storybook/react";

import Keypad from "./Keypad";

const meta: Meta<typeof Keypad> = {
  component: Keypad,
  title: "Keypad",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const BaseKeypad: Story = {};

export default meta;
