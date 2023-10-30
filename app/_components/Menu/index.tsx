"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import { Menu as LucideMenu, X, Plus, Minus } from "lucide-react";
import { useRef, useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const linkRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const toggleIsOpen = () => setIsOpen(!isOpen);
  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  const handleFocus = () => {
    if (childRef.current) {
      childRef.current.className += ` ${styles.active}`;
    }
  };

  const handleBlur = () => {
    if (childRef.current) {
      childRef.current.className = childRef.current.className.replace(styles.active, "");
    }
  };

  const handleMenuToggle = () => {
    toggleIsMenuOpen();
    handleFocus();
  };

  return (
    <>
      <button
        className={styles.button}
        onClick={toggleIsOpen}
        aria-label="メニューを開閉する"
      >
        {isOpen ? (
          <X size={36} strokeWidth={1} />
        ) : (
          <LucideMenu size={36} strokeWidth={1} />
        )}
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <div className={styles.list}>
          <div className={styles.item}>
            <Link className={styles.navLink} href="/about">
              企業情報
            </Link>
          </div>

          <div ref={linkRef} className={`${styles.item} ${styles.parent}`}>
            <button
              type="button"
              className={`${styles.parentInner} ${styles.parentLinkButton}`}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <span>職種から探す</span>
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
            </button>
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

            <div
              ref={childRef}
              className={`${styles.child} ${isMenuOpen ? styles.active : ""}`}
            >
              <ul className={styles.childList}>
                <li className={styles.childItem}>
                  <Link
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={styles.navLink}
                    href="/position/engineer"
                  >
                    エンジニア
                  </Link>
                </li>
                <li className={styles.childItem}>
                  <Link
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={styles.navLink}
                    href="/position/designer"
                  >
                    Webデザイナー
                  </Link>
                </li>
                <li className={styles.childItem}>
                  <Link
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={styles.navLink}
                    href="/position/customer"
                  >
                    カスタマー
                  </Link>
                </li>
                <li className={styles.childItem}>
                  <Link
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={styles.navLink}
                    href="/position/crm"
                  >
                    CRM
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.item}>
            <Link className={styles.navLink} href="/new-graduates">
              新卒採用
            </Link>
          </div>

          <div className={styles.item}>
            <Link className={styles.navLink} href="/flow">
              選考フロー
            </Link>
          </div>

          <div className={styles.item}>
            <Link className={styles.navLink} href="/interview">
              社員インタビュー
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
