import styles from "./ButtonRow.module.scss";

type ButtonRowProps = {
  children: React.ReactNode;
};

const ButtonRow = ({ children }: ButtonRowProps) => {
  return <div className={styles.button_row}>{children}</div>;
};

export default ButtonRow;
