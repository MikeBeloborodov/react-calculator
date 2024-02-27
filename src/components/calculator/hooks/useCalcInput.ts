import { useState } from "react";
import { defaultCalculation } from "../Calculator";

export type Operators = "+" | "-" | "x" | "÷";

export type Calculation = {
  expression: string;
  operator: Operators | null;
  result: string;
  operand: string | null;
};

export type CalcFuncs = {
  changeOperator: (e: React.MouseEvent) => void;
  inputDigits: (e: React.MouseEvent) => void;
  refreshCalculation: () => void;
  addDot: () => void;
};

function handleOperator(expression: string, operator: Operators) {
  const operators = ["+", "-", "x", "÷"];
  if (operators.includes(expression[expression.length - 1])) {
    expression = expression.slice(0, -1) + operator;
  } else {
    expression += operator;
  }
  return expression;
}

function handleCalculation(expression: string): string {
  return (+eval(expression.replace(/x/g, "*").replace(/÷/g, "/")).toFixed(
    6
  )).toString();
}

function useCalcInput(props: Calculation): [Calculation, CalcFuncs] {
  const [calculation, setCalculation] = useState<Calculation>(props);

  function changeOperator(e: React.MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const operator = target.textContent! as Operators;
    setCalculation((oldVal) => ({
      ...oldVal,
      operator: operator,
      expression: handleOperator(oldVal.expression, operator),
      operand: null,
    }));
  }

  function addDot() {
    setCalculation((oldVal) => {
      let expression = oldVal.expression;
      if (oldVal.operand) {
        if (oldVal.operand.includes(".")) return oldVal;
        expression += ".";
        return { ...oldVal, expression, operand: oldVal.operand + "." };
      } else {
        if (oldVal.result.includes(".")) return oldVal;
        expression += ".";
        return { ...oldVal, expression, result: oldVal.result + "." };
      }
    });
  }

  function inputDigits(e: React.MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const digit = target.textContent! as Operators;
    if (!calculation.operator) {
      setCalculation((oldVal) => {
        if (calculation.expression === "0") {
          return { ...oldVal, expression: digit, result: digit };
        } else {
          return {
            ...oldVal,
            expression: oldVal.expression + digit,
            result: oldVal.result + digit,
          };
        }
      });
    } else {
      setCalculation((oldVal) => {
        const operand = oldVal.operand ? oldVal.operand + digit : digit;
        const expression = oldVal.expression + digit;
        const result = handleCalculation(expression);
        return {
          ...oldVal,
          operand,
          result,
          expression,
        };
      });
    }
  }

  function refreshCalculation() {
    setCalculation(defaultCalculation);
  }

  return [
    calculation,
    { inputDigits, changeOperator, refreshCalculation, addDot },
  ];
}

export default useCalcInput;
