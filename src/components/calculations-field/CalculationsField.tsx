import style from "./CalculationsField.module.scss";
import Expression from "../expression/Expression";
import { ExpressionColor } from "../expression/Expression";
import { Calculation } from "../calculator/hooks/useCalcInput";

type CalculationsFieldProps = {
  calculation: Calculation;
  color?: ExpressionColor;
};

const CalculationsField = ({
  calculation,
  color = "white",
}: CalculationsFieldProps) => {
  return (
    <div className={style.calculations}>
      {calculation.expression === "0" ? (
        <Expression color={color} data="0" />
      ) : (
        <div>
          <Expression color={color} data={calculation.expression} />
          <Expression color={color} data={"= " + calculation.result} />
        </div>
      )}
    </div>
  );
};

export default CalculationsField;
