import style from "./ButtonGrid.module.scss";

type ButtonGridProps = {
  children: React.ReactNode;
};

const ButtonGrid = ({ children }: ButtonGridProps) => {
  return <div className={style.button_grid}>{children}</div>;
};

export default ButtonGrid;
