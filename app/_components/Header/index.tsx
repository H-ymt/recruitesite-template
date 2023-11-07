import Image from "next/image";
import Menu from "../Menu";
import styles from "./index.module.scss";
import Link from "next/link";
import MenuMobile from "../MenuMobile";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">
          <Image src="/favicon.ico" width={32} height={32} alt="" decoding="async" priority />
        </Link>
        <MenuMobile />
        <Menu />
      </div>
    </header>
  );
}
