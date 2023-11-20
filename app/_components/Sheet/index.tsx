import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return <div className={styles.sheet}>{children}</div>;
}
