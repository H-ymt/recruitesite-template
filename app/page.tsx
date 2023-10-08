import Image from "next/image";
import styles from "./page.module.scss";
import Sheet from "./_components/Sheet";

export default function Home() {
  return (
    <Sheet>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Jamstackで高速かつ
            <br />
            セキュアなWebサイトを構築
          </h1>
          <p className={styles.heroText}>
            私たちはモダンなフロントエンド技術とヘッドレスCMSを駆使して、高速かつセキュアでスケーラブルなWebサイトを構築します。
            あなたのアイデアとスキルで、私たちと一緒に未来を創り上げましょう。
          </p>
        </div>
        <Image className={styles.heroImage} src="/hero.svg" width="556" height="400" alt="" />
      </div>
    </Sheet>
  );
}
