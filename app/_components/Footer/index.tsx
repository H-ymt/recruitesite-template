import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.logo}>
          <Image
            src="/favicon.ico"
            width={24}
            height={24}
            alt=""
            decoding="async"
            aria-hidden="true"
          />
        </div>

        <nav className={styles.footerNav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/about"
              >
                企業情報
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/new-graduates"
              >
                新卒採用
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/flow"
              >
                選考フロー
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                href="/interview"
              >
                社員インタビュー
              </Link>
            </li>
          </ul>

          <ul className={`${styles.list} ${styles.listParent}`}>
            <li className={styles.item}>職種から探す</li>
            <li>
              <ul className={styles.listChild}>
                <li className={styles.item}>
                  <Link
                    className={styles.link}
                    href="/position/engineer"
                  >
                    エンジニア
                  </Link>
                </li>

                <li className={styles.item}>
                  <Link
                    className={styles.link}
                    href="/position/designer"
                  >
                    Webデザイナー
                  </Link>
                </li>

                <li className={styles.item}>
                  <Link
                    className={styles.link}
                    href="/position/customer"
                  >
                    カスタマー
                  </Link>
                </li>

                <li className={styles.item}>
                  <Link
                    className={styles.link}
                    href="/position/crm"
                  >
                    CRM
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
