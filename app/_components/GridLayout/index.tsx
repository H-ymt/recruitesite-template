import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function GridLayout({ children }: Props) {
  return <div className={styles.gridLayout}>{children}</div>;
}
