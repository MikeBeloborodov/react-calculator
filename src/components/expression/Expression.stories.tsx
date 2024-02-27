import { StoryObj, Meta } from "@storybook/react";

import Expression from "./Expression";

const meta: Meta<typeof Expression> = {
  component: Expression,
  title: "Expression",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const BaseExpression: Story = {
  args: {
    data: "10+20",
  },
};

export default meta;
