import Image from "next/image";
import styles from "./page.module.scss";
import Sheet from "./_components/Sheet";
import { PrimaryButton } from "./_components/ButtonLink";

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
        <Image
          className={styles.heroImage}
          src="/hero.svg"
          width="556"
          height="400"
          alt=""
        />
      </div>

      <section>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionTitleEn}>New&ensp;graduate</span>
          新卒採用
        </h2>
        <PrimaryButton href="/">もっと見る</PrimaryButton>

        <div className={styles.newGraduateContent}>
          <div className={styles.newGraduateImage}>
            <Image
              src="/new-graduate.svg"
              alt=""
              width="1027"
              height="799"
              decoding="async"
            />
          </div>
          <p>
            私たちの会社は、あなたが学んだ知識を活かし、新たな挑戦を通じて成長していく場所です。アイデアと情熱を大切にし、それを活かす機会を大切にします。私たちと一緒に、未来を創造しましょう。
          </p>
        </div>
      </section>
    </Sheet>
  );
}
