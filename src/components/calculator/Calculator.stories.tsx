import { StoryObj, Meta } from "@storybook/react";

import Calculator from "./Calculator";

const meta: Meta<typeof Calculator> = {
  component: Calculator,
  title: "FinalProduct/Calculator",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const BaseCalculator: Story = {};

export default meta;
