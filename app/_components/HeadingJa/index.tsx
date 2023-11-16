import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function HeadingJa({ children }: Props) {
  return <h1 className={styles.title}>{children}</h1>;
}
