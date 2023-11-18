import { formatDate } from '@/app/_libs/formatDate';
import { Article } from '@/app/_libs/microcms';
import Sheet from '../Sheet';
import styles from './index.module.scss';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <Sheet>
        <div className={styles.heading}>
          <h1>{data.title}</h1>
          <time>{formatDate(data.date)}</time>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: data.content }}
          className={styles.body}
        />
      </Sheet>
    </main>
  );
}
