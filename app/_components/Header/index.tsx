import Image from "next/image";
import Menu from "../Menu";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">
          <Image src="/favicon.ico" width={24} height={24} alt="" decoding="async" />
          <span className={styles.logoText}>採用サイト</span>
        </Link>
        <Menu />
      </div>
    </header>
  );
}
