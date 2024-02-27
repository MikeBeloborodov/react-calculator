import { StoryObj, Meta } from "@storybook/react";

import ButtonRow from "../button-row/ButtonRow";
import Button from "../button/Button";
import ButtonGrid from "./ButtonGrid";

const meta: Meta<typeof ButtonGrid> = {
  component: ButtonGrid,
  title: "Button grid",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const BaseButtonGrid: Story = {
  render: () => (
    <ButtonGrid>
      <ButtonRow>
        <Button bgColor={"light-gray"} text={"AC"} />
        <Button bgColor={"light-gray"} text={"±"} />
        <Button bgColor={"light-gray"} text={"%"} />
        <Button bgColor={"orange"} text={"÷"} />
      </ButtonRow>
      <ButtonRow>
        <Button bgColor={"dark-gray"} text={"1"} />
        <Button bgColor={"dark-gray"} text={"2"} />
        <Button bgColor={"dark-gray"} text={"3"} />
        <Button bgColor={"orange"} text={"+"} />
      </ButtonRow>
      <ButtonRow>
        <Button bgColor={"dark-gray"} text={"0"} type="long" />
        <Button bgColor={"dark-gray"} text={"."} />
        <Button bgColor={"orange"} text={"="} />
      </ButtonRow>
    </ButtonGrid>
  ),
};

export default meta;
