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
            <li>
              <Link href="/about">企業情報</Link>
            </li>
            <li>
              <Link href="/new-graduates">新卒採用</Link>
            </li>
            <li>
              <Link href="/flow">選考フロー</Link>
            </li>
            <li>
              <Link href="/interview">社員インタビュー</Link>
            </li>
          </ul>

          <ul className={`${styles.list} ${styles.listParent}`}>
            <li>職種から探す</li>
            <li>
              <ul className={styles.listChild}>
                <li>
                  <Link href="/position/engineer">エンジニア</Link>
                </li>

                <li>
                  <Link href="/position/designer">Webデザイナー</Link>
                </li>

                <li>
                  <Link href="/position/customer">カスタマー</Link>
                </li>

                <li>
                  <Link href="/position/crm">CRM</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
