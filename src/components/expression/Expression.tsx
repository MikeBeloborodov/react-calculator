import clsx from "clsx";
import style from "./Expression.module.scss";

export type ExpressionColor = "white" | "black";
type ExpressionProps = {
  color?: ExpressionColor;
  data: string;
};

const Expression = ({ color, data }: ExpressionProps) => {
  return (
    <p
      className={clsx({
        [style.expression]: true,
        [style.expression_white]: color === "white",
        [style.expression_black]: color === "black",
      })}
    >
      {data}
    </p>
  );
};

export default Expression;
