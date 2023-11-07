"use client";

import Image from "next/image";
import Menu from "../Menu";
import styles from "./index.module.scss";
import Link from "next/link";
import MenuMobile from "../MenuMobile";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.isScrolled : ""}`}>
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
