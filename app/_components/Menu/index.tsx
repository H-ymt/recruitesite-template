"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import { Menu as LucideMenu, X, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className={styles.button}
        onClick={handleClick}
        aria-label="メニューを開閉する"
      >
        {isOpen! ? (
          <X size={36} strokeWidth={1} />
        ) : (
          <LucideMenu size={36} strokeWidth={1} />
        )}
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <div className={styles.list}>
          <div className={styles.item}>
            <Link href="/about">企業情報</Link>
          </div>

          <div className={`${styles.item} ${styles.parent}`} role="button">
            <div className={styles.parentInner}>
              <div>職種から探す</div>

              <Plus
                size={14}
                strokeWidth={2}
                className={`${styles.plusIcon} ${isMenuOpen ? styles.hidden : ""}`}
              />
              <Minus
                size={14}
                strokeWidth={2}
                className={`${styles.minusIcon} ${isMenuOpen ? "" : styles.hidden}`}
              />
            </div>
            <div
              className={`${styles.parentInner} ${styles.mobile}`}
              onClick={handleMenuToggle}
            >
              <div>職種から探す</div>

              <Plus
                size={14}
                strokeWidth={2}
                className={`${styles.plusIcon} ${isMenuOpen ? styles.hidden : ""}`}
              />
              <Minus
                size={14}
                strokeWidth={2}
                className={`${styles.minusIcon} ${isMenuOpen ? "" : styles.hidden}`}
              />
            </div>

            <div className={`${styles.child} ${isMenuOpen ? styles.active : ""}`}>
              <ul className={styles.childList}>
                <li className={styles.childItem}>
                  <Link href="/position/crm">エンジニア</Link>
                </li>
                <li className={styles.childItem}>
                  <Link href="/position/crm">Webデザイナー</Link>
                </li>
                <li className={styles.childItem}>
                  <Link href="/position/crm">カスタマー</Link>
                </li>
                <li className={styles.childItem}>
                  <Link href="/position/crm">CRM</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.item}>
            <Link href="/new-graduates">新卒採用</Link>
          </div>

          <div className={styles.item}>
            <Link href="/flow">選考フロー</Link>
          </div>

          <div className={styles.item}>
            <Link href="/interview">社員インタビュー</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
