import { StoryObj, Meta } from "@storybook/react";

import ButtonRow from "./ButtonRow";
import Button from "../button/Button";

const meta: Meta<typeof ButtonRow> = {
  component: ButtonRow,
  title: "Button row",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const BaseButtonRow: Story = {
  render: () => (
    <ButtonRow>
      <Button bgColor={"dark-gray"} text={"1"} />
      <Button bgColor={"dark-gray"} text={"3"} />
      <Button bgColor={"dark-gray"} text={"2"} />
      <Button bgColor={"orange"} text={"+"} />
    </ButtonRow>
  ),
};

export const LongButtonRow: Story = {
  render: () => (
    <ButtonRow>
      <Button bgColor={"dark-gray"} text={"0"} type="long" />
      <Button bgColor={"dark-gray"} text={"."} />
      <Button bgColor={"orange"} text={"="} />
    </ButtonRow>
  ),
};

export default meta;
