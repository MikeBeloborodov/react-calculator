import style from "./Calculator.module.scss";
import CalculationsField from "../calculations-field/CalculationsField";
import Keypad from "../keypad/Keypad";
import { Calculation } from "./hooks/useCalcInput";
import useCalcInput from "./hooks/useCalcInput";

export const defaultCalculation: Calculation = {
  expression: "0",
  operator: null,
  result: "0",
  operand: null,
};

const Calculator = () => {
  const [calculation, calcFuncs] = useCalcInput(defaultCalculation);
  return (
    <div className={style.calculator}>
      <CalculationsField calculation={calculation} />
      <Keypad calculation={calculation} calcFuncs={calcFuncs} />
    </div>
  );
};

export default Calculator;
