import { CSSProperties } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

type ButtonTypes = "normal" | "long";
type ButtonBgColor = "dark-gray" | "orange" | "light-gray";
type ButtonBgColorOptions = { bg: string; font: string };
type ButtonBgColorMapping = Record<ButtonBgColor, ButtonBgColorOptions>;

const bgColorOptions: ButtonBgColorMapping = {
  "dark-gray": {
    bg: "#333333",
    font: "#ffffff",
  },
  orange: {
    bg: "#ff9f0a",
    font: "#ffffff",
  },
  "light-gray": {
    bg: "#a5a5a5",
    font: "#000000",
  },
};

type OnClick = (e: React.MouseEvent) => void;

type ButtonProps = {
  text: string;
  bgColor: ButtonBgColor;
  type?: ButtonTypes;
  onClick?: OnClick;
};

const Button = ({ text, bgColor, type = "normal", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx({
        [style.button]: true,
        [style.button_long]: type === "long",
      })}
      style={
        {
          "--bg-color": bgColorOptions[bgColor].bg,
          "--font-color": bgColorOptions[bgColor].font,
        } as CSSProperties
      }
    >
      {text}
    </button>
  );
};

export default Button;
