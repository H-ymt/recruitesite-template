import Link from "next/link";
import styles from "./index.module.scss";
import { ArrowRightCircle } from "lucide-react";

type Props = {
  children: React.ReactNode;
  href: string;
};

export const PrimaryButton = ({ children, href }: Props) => {
  return (
    <>
      <Link className={`${styles.button} ${styles.primaryButton}`} href={href}>
        {children}
        <ArrowRightCircle
          strokeWidth="1.4"
          size="20"
          color="#020202"
          className={styles.icon}
        />
      </Link>
    </>
  );
};

export const SecondaryButton = ({ children, href }: Props) => {
  return (
    <>
      <Link className={`${styles.button} ${styles.secondaryButton}`} href={href}>
        {children}
        <ArrowRightCircle
          strokeWidth="1.4"
          size="20"
          color="#3C4E91"
          className={styles.icon}
        />
      </Link>
    </>
  );
};
