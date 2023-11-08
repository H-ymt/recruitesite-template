import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function AnimationWrapper({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>;
}
