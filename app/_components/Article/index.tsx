import { formatDate } from '@/app/_libs/formatDate';
import { Article } from '@/app/_libs/microcms';
import { SecondaryButton } from '../ButtonLink';
import Sheet from '../Sheet';
import styles from './index.module.scss';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main className={styles.mainContents}>
      <Sheet>
        <div className={styles.heading}>
          <h1>{data.title}</h1>
          <time className={styles.date}>投稿日 : {formatDate(data.date)}</time>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.content }}
          className={styles.body}
        />

        <div className={styles.button}>
          <SecondaryButton href='/'>トップへ戻る</SecondaryButton>
        </div>
      </Sheet>
    </main>
  );
}
