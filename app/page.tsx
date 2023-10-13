import Image from "next/image";
import styles from "./page.module.scss";
import Sheet from "./_components/Sheet";
import { PrimaryButton, SecondaryButton } from "./_components/ButtonLink";
import CardLink from "./_components/CardLink";

export default function Home() {
  return (
    <Sheet>
      <div className={styles.hero}>
        <div className={styles.heroHead}>
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

        <div className={styles.heroButtonGroup}>
          <PrimaryButton href="/">エントリーはこちら</PrimaryButton>
        </div>
      </div>

      <section className={styles.newGraduateSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionTitleEn}>New&ensp;graduates</span>
          新卒採用
        </h2>

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

          <div className={styles.newGraduateText}>
            <p>
              私たちの会社は、あなたが学んだ知識を活かし、新たな挑戦を通じて成長していく場所です。アイデアと情熱を大切にし、それを活かす機会を大切にします。私たちと一緒に、未来を創造しましょう。
            </p>
            <PrimaryButton href="/new-graduates">新卒採用</PrimaryButton>
          </div>
        </div>
      </section>

      <section className={styles.homeSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionTitleEn}>Mid-career&ensp;recruitment</span>
          キャリア採用
        </h2>

        <div className={styles.careerCards}>
          <CardLink
            href="/position/engineer"
            imgUrl="/careers-engineer.svg"
            titleEn="Engineer"
            titleJp="エンジニア"
          />
          <CardLink
            href="/position/designer"
            imgUrl="/careers-designer.svg"
            titleEn="Designer"
            titleJp="Webデザイナー"
          />
          <CardLink
            href="/position/customer"
            imgUrl="/careers-customer.svg"
            titleEn="Customer"
            titleJp="カスタマー"
          />
          <CardLink
            href="/position/crm"
            imgUrl="/careers-crm.svg"
            titleEn="CRM"
            titleJp="顧客戦略"
          />
        </div>
      </section>

      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionTitleEn}>News</span>
        ニュース
      </h2>
    </Sheet>
  );
}
