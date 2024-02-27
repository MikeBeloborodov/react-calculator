import ButtonGrid from "../button-grid/ButtonGrid";
import ButtonRow from "../button-row/ButtonRow";
import Button from "../button/Button";
import { CalcFuncs, Calculation } from "../calculator/hooks/useCalcInput";

type KeypadProps = {
  calculation: Calculation;
  calcFuncs: CalcFuncs;
};

const Keypad = ({ calcFuncs, calculation }: KeypadProps) => {
  const { inputDigits, refreshCalculation, changeOperator, addDot } = calcFuncs;
  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLButtonElement;
  }

  return (
    <ButtonGrid>
      <ButtonRow>
        <Button
          onClick={refreshCalculation}
          bgColor={"light-gray"}
          text={calculation.expression === "0" ? "AC" : "C"}
        />
        <Button onClick={handleClick} bgColor={"light-gray"} text={"±"} />
        <Button onClick={handleClick} bgColor={"light-gray"} text={"%"} />
        <Button onClick={changeOperator} bgColor={"orange"} text={"÷"} />
      </ButtonRow>
      <ButtonRow>
        <Button onClick={inputDigits} bgColor={"dark-gray"} text={"7"} />
        <Button onClick={inputDigits} bgColor={"dark-gray"} text={"8"} />
        <Button onClick={inputDigits} bgColor={"dark-gray"} text={"9"} />
        <Button onClick={changeOperator} bgColor={"orange"} text={"x"} />
      </ButtonRow>
      <ButtonRow>
        <Button onClick={inputDigits} bgColor={"dark-gray"} text={"4"} />
        <Button onClick={inputDigits} bgColor={"dark-gray"} text={"5"} />
        <Button onClick={inputDigits} bgColor={"dark-gray"} text={"6"} />
        <Button onClick={changeOperator} bgColor={"orange"} text={"-"} />
      </ButtonRow>
      <ButtonRow>
        <Button onClick={inputDigits} bgColor={"dark-gray"} text={"1"} />
        <Button onClick={inputDigits} bgColor={"dark-gray"} text={"2"} />
        <Button onClick={inputDigits} bgColor={"dark-gray"} text={"3"} />
        <Button onClick={changeOperator} bgColor={"orange"} text={"+"} />
      </ButtonRow>
      <ButtonRow>
        <Button
          onClick={inputDigits}
          bgColor={"dark-gray"}
          text={"0"}
          type="long"
        />
        <Button onClick={addDot} bgColor={"dark-gray"} text={"."} />
        <Button onClick={handleClick} bgColor={"orange"} text={"="} />
      </ButtonRow>
    </ButtonGrid>
  );
};

export default Keypad;
