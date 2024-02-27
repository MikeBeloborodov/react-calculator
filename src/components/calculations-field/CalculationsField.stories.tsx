import { StoryObj, Meta } from "@storybook/react";

import CalculationsField from "./CalculationsField";

const meta: Meta<typeof CalculationsField> = {
  component: CalculationsField,
  title: "Calculations field",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const BaseCalculationsField: Story = {
  args: {
    color: "black",
  },
};

export default meta;
