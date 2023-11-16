'use client';

import Image from 'next/image';
import BasicSlider from '../_components/BasicSlider';
import Sheet from '../_components/Sheet';
import styles from './page.module.scss';

export default function Page() {
  return (
    <>
      <Sheet>
        <h1 className={styles.aboutTitle}>
          Jamstackを使って<span>高速で安全なサイトを構築する</span>
        </h1>

        <div className={styles.heading}>
          <Image
            src='/about.svg'
            alt=''
            width={400}
            height={400}
            className={styles.heroImage}
          />
          <p className={styles.headingText}>
            私たちは2020年4月に創業した企業です。
            <br />
            九州を拠点に現在18名と少数精鋭のメンバーでWebサイトの開発を行っています。
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Jamstackとは</h2>
          <p>
            Jamstackは、ウェブ開発の新しいアーキテクチャの一つで、JavaScript、API、Markupの頭文字を取ったものです。
            <br />
            このアーキテクチャは、ウェブサイトのパフォーマンスとセキュリティを向上させ、スケーラビリティを確保することができます。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Jamstack選ぶ理由</h2>

          <dl className={styles.jamstackList}>
            <dt className={styles.jamstackTerm}>パフォーマンス</dt>
            <dd className={styles.jamstackDescription}>
              静的なコンテンツを配信するだけでなく、CDNから配信することで高速化を図ります。
              <br />
              これにより、大量のアクセスに強く、高速に配信できます。
            </dd>
          </dl>

          <dl className={styles.jamstackList}>
            <dt className={styles.jamstackTerm}>セキュリティ</dt>
            <dd className={styles.jamstackDescription}>
              Jamstackはウェブサイトを安全に構築するために、セキュリティを備えたもので、サイトのパフォーマンスを向上させます。
            </dd>
          </dl>

          <dl className={styles.jamstackList}>
            <dt className={styles.jamstackTerm}>スケーラビリティ</dt>
            <dd className={styles.jamstackDescription}>
              Jamstackのフロントエンドは高速、バックエンドは軽量であるため、アプリケーションは非常にスケーラブルなものになります。
            </dd>
          </dl>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>福利厚生</h2>

          <div className={styles.welfareWrapper}>
            <dl className={styles.welfareList}>
              <div className={styles.welfareItem}>
                <dt className={styles.welfareHead}>
                  <p>
                    <Image
                      src='/byod-image.svg'
                      width='200'
                      height='200'
                      alt=''
                    />
                  </p>
                  <p>BYOD</p>
                </dt>
                <dd className={styles.welfareDescription}>
                  操作性の向上や作業のスピードアップを目的に、使い慣れた私物端末で業務を行うことを許可しています。希望すれば会社支給の端末も使用可能です。
                </dd>
              </div>

              <div className={styles.welfareItem}>
                <dt className={styles.welfareHead}>
                  <p>
                    <Image
                      src='/remote-work.svg'
                      width='200'
                      height='200'
                      alt=''
                    />
                  </p>
                  <p>テレワーク手当</p>
                </dt>
                <dd className={styles.welfareDescription}>
                  在宅勤務に伴って発生する従業員の負担を軽減するため、入社後にテレワーク手当（上限7万円）を支給しています。
                </dd>
              </div>

              <div className={styles.welfareItem}>
                <dt className={styles.welfareHead}>
                  <p>
                    <Image
                      src='/cafe.svg'
                      width='200'
                      height='200'
                      alt=''
                    />
                  </p>
                  <p>社内カフェ</p>
                </dt>
                <dd className={styles.welfareDescription}>
                  社内カフェが併設しており、従業員はコーヒー飲み放題！ミーティングやちょっとした休憩スペースとしても利用できます。
                </dd>
              </div>

              <div className={styles.welfareItem}>
                <dt className={styles.welfareHead}>
                  <p>
                    <Image
                      src='/vacation.svg'
                      width='200'
                      height='200'
                      alt=''
                    />
                  </p>
                  <p>土日祝日振替え休日</p>
                </dt>
                <dd className={styles.welfareDescription}>
                  土日に祝日がある場合は、次の労働日を振替え休日としています。ちょっとした旅行に最適です。
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </Sheet>

      <div className={styles.swiper}>
        <p className={styles.swiperText}>
          Let&apos;s&ensp;change&ensp;the&ensp;
          <span className={styles.swiperTextBreak}>
            web&ensp;industry&ensp;with&ensp;us!
          </span>
        </p>
        <BasicSlider />
      </div>
    </>
  );
}
