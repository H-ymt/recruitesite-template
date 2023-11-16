import { getNewsList } from '@/app/_libs/microcms';
import Image from 'next/image';
import { PrimaryButton } from './_components/ButtonLink';
import CardLink from './_components/CardLink';
import NewsList from './_components/NewsList';
import { TOP_NEWS_LIMIT } from './_constants';
import styles from './page.module.scss';

export const revalidate = 120;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroHead}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Developing websites using modern technologies.
            </h1>
            <p className={styles.heroText}>
              私たちはモダンなフロントエンド技術とヘッドレスCMSを駆使して、高速かつセキュアでスケーラブルなWebサイトを構築します。
            </p>
          </div>
          <Image
            className={styles.heroImage}
            src='/hero.svg'
            width='556'
            height='400'
            alt=''
          />
        </div>

        <div className={styles.heroButtonGroup}>
          <PrimaryButton href='/'>エントリーはこちら</PrimaryButton>
        </div>
      </div>

      <div className={styles.wrapper}>
        <section className={styles.newGraduateSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionTitleEn}>New&ensp;graduates</span>
            新卒採用
          </h2>

          <div className={styles.newGraduateContent}>
            <div className={styles.newGraduateImage}>
              <Image
                src='/new-graduate.svg'
                alt=''
                width='1027'
                height='799'
                decoding='async'
              />
            </div>

            <div className={styles.newGraduateText}>
              <p>
                私たちの会社は、あなたが学んだ知識を活かし、新たな挑戦を通じて成長していく場所です。アイデアと情熱を大切にし、それを活かす機会を大切にします。
              </p>
              <PrimaryButton href='/new-graduates'>新卒採用</PrimaryButton>
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
              href='/position/engineer'
              imgUrl='/careers-engineer.svg'
              titleEn='Engineer'
              titleJp='エンジニア'
            />
            <CardLink
              href='/position/designer'
              imgUrl='/careers-designer.svg'
              titleEn='Designer'
              titleJp='Webデザイナー'
            />
            <CardLink
              href='/position/customer'
              imgUrl='/careers-customer.svg'
              titleEn='Customer'
              titleJp='カスタマー'
            />
            <CardLink
              href='/position/crm'
              imgUrl='/careers-crm.svg'
              titleEn='CRM'
              titleJp='顧客戦略'
            />
          </div>
        </section>

        <section className={styles.homeSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionTitleEn}>News</span>
            ニュース
          </h2>

          <NewsList articles={data.contents} />
        </section>

        <section className={styles.homeSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionTitleEn}>Tech&ensp;Stack</span>
            技術スタック
          </h2>

          <p>
            弊社で利用している技術スタックを紹介します。
            <br />
            チーム・プロジェクトにとって最適な技術をそれぞれが考え、選定していく環境となるよう心がけています。
          </p>

          <div className={styles.stackContainer}>
            <div className={styles.stackIcon}>
              <Image
                src='/logo_typescript.png'
                width='56'
                height='56'
                alt='TypeScript'
                aria-hidden='true'
              />
              <span className={styles.stackName}>TypeScript</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/icon_react.png'
                width='48'
                height='48'
                alt='React'
              />
              <span className={styles.stackName}>React</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/logo_vue.png'
                width='56'
                height='56'
                alt='Vue'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Vue.js</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/icon_nextjs.png'
                width='56'
                height='56'
                alt='Next.js'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Next.js</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/logo_nuxt.png'
                width='56'
                height='56'
                alt='Nuxt.js'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Nuxt.js</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/icon_astro.png'
                width='56'
                height='56'
                alt='Astro'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Astro</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/icon_nodejs.png'
                width='56'
                height='56'
                alt='node.js'
                aria-hidden='true'
              />
              <span className={styles.stackName}>node.js</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/logo_bun.png'
                width='56'
                height='56'
                alt='Bun'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Bun</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/logo_pnpm.png'
                width='56'
                height='56'
                alt='pnpm'
                aria-hidden='true'
              />
              <span className={styles.stackName}>pnpm</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/icon_vercel.png'
                width='56'
                height='56'
                alt='Vercel'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Vercel</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/icon_netlify.png'
                width='56'
                height='56'
                alt='Netlify'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Netlify</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/logo_cloudflare.png'
                width='56'
                height='56'
                alt='Cloudflare'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Cloudflare</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/icon_firebase.png'
                width='56'
                height='56'
                alt='Firebase'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Firebase</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/icon_supabase.png'
                width='56'
                height='56'
                alt='Supabase'
                aria-hidden='true'
              />
              <span className={styles.stackName}>Supabase</span>
            </div>

            <div className={styles.stackIcon}>
              <Image
                src='/icon_github.png'
                width='56'
                height='56'
                alt='GitHub'
                aria-hidden='true'
              />
              <span className={styles.stackName}>GitHub</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
