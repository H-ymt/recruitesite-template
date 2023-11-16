import { PrimaryButton } from '../_components/ButtonLink';
import Sheet from '../_components/Sheet';
import styles from './page.module.scss';

export default function Page() {
  return (
    <Sheet>
      <div className={styles.heading}>
        <h1 className={styles.headingTitle}>
          <span className={styles.pageTitleEn}>New graduates</span>
          新卒採用
        </h1>
        <p className={styles.headingText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium laborum
          debitis ad? Obcaecati dicta voluptatum temporibus facilis tenetur corrupti
          accusantium esse harum quo, possimus culpa ipsam. Molestias, at saepe. Quis!
        </p>
      </div>

      <section>
        <h2 className={styles.sectionTitle}>募集要項</h2>
        <table className={styles.description}>
          <tbody>
            <tr className={styles.descriptionRow}>
              <th className={styles.descriptionHead}>雇用形態</th>
              <td className={styles.descriptionData}>正社員</td>
            </tr>
            <tr className={styles.descriptionRow}>
              <th className={styles.descriptionHead}>勤務地</th>
              <td className={styles.descriptionData}>東京都</td>
            </tr>
            <tr className={styles.descriptionRow}>
              <th className={styles.descriptionHead}>募集職種</th>
              <td className={styles.descriptionData}>エンジニア、Webデザイナー</td>
            </tr>
            <tr className={styles.descriptionRow}>
              <th className={styles.descriptionHead}>応募資格</th>
              <td className={styles.descriptionData}>
                2024年3月末までに国内外の大学院、大学を卒業・修了（見込み）の方
              </td>
            </tr>
            <tr className={styles.descriptionRow}>
              <th className={styles.descriptionHead}>給与</th>
              <td className={styles.descriptionData}>
                <b>エンジニア</b>
                <ul>
                  <li>高専卒：月給230,000円〜</li>
                  <li>大学卒：月給250,000円〜</li>
                  <li>修士了卒：月給300,000円</li>
                </ul>
                <br />
                <b>Webデザイナー</b>
                <ul>
                  <li>高専卒：月給230,000円〜</li>
                  <li>大学卒：月給250,000円〜</li>
                  <li>修士了卒：月給300,000円</li>
                </ul>
              </td>
            </tr>
            <tr className={styles.descriptionRow}>
              <th className={styles.descriptionHead}>昇給</th>
              <td className={styles.descriptionData}>年1回（原則）</td>
            </tr>
            <tr className={styles.descriptionRow}>
              <th className={styles.descriptionHead}>賞与</th>
              <td className={styles.descriptionData}>年2回</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className={styles.flowLink}>
        <PrimaryButton href='/flow'>選考フローはこちら</PrimaryButton>
      </div>
    </Sheet>
  );
}
