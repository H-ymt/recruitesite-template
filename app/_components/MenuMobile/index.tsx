"use client";

import { Menu as LucideMenu, X, ChevronDown, Plus, Minus } from "lucide-react";
import styles from "./index.module.scss";
import { useId, useState } from "react";
import Link from "next/link";

export default function MenuMobile() {
  const menuId = useId();
  const menuContentId = useId();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const handleContentToggle = () => {
    isContentOpen ? setIsContentOpen(false) : setIsContentOpen(true);
  };

  return (
    <>
      <button
        className={styles.handleMenuButton}
        onClick={handleMenuToggle}
        aria-label="メニューを開閉する"
        aria-controls={menuId}
      >
        {isOpen ? (
          <X size={36} strokeWidth={1} className={styles.closeIcon} />
        ) : (
          <LucideMenu size={36} strokeWidth={1} className={styles.openIcon} />
        )}
      </button>

      <div
        className={`${styles.overlay} ${isOpen ? styles.isOpen : ""}`}
        onClick={handleMenuToggle}
      ></div>

      <nav
        id={menuId}
        className={`${styles.menu} ${isOpen ? styles.isOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} href="/" onClick={handleMenuToggle}>
              トップページ
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/about" onClick={handleMenuToggle}>
              企業情報
            </Link>
          </li>
          <li className={styles.item}>
            <div
              role="button"
              aria-controls={menuContentId}
              className={styles.menuTrigger}
              onClick={handleContentToggle}
            >
              職種から探す
              <ChevronDown
                size={18}
                strokeWidth={1}
                className={`${styles.chevron} ${isContentOpen ? styles.isRouted : ""}`}
              />
            </div>

            <div className={`${styles.menuContent} ${isContentOpen ? styles.isOpen : ""}`}>
              <Link className={styles.link} href="/position/engineer" onClick={handleMenuToggle}>
                エンジニア
              </Link>
              <Link className={styles.link} href="/position/designer" onClick={handleMenuToggle}>
                Webデザイナー
              </Link>
              <Link className={styles.link} href="/position/customer" onClick={handleMenuToggle}>
                カスタマー
              </Link>
              <Link className={styles.link} href="/position/crm" onClick={handleMenuToggle}>
                CRM
              </Link>
            </div>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/new-graduates" onClick={handleMenuToggle}>
              新卒採用
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/flow" onClick={handleMenuToggle}>
              選考フロー
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/interview" onClick={handleMenuToggle}>
              社員インタビュー
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
