import { formatDate } from "@/app/_libs/formatDate";
import { Article } from "@/app/_libs/microcms";
import Link from "next/link";
import styles from "./index.module.scss";

type Props = {
  news: Article;
};

export default function NewsListItem({ news }: Props) {
  return (
    <li className={styles.newsListItem}>
      <Link href={`news/${news.id}`}>
        <dl className={styles.list}>
          <dd className={styles.meta}>
            <time>{formatDate(news.date)}</time>
          </dd>
          <dt className={styles.title}>{news.title}</dt>
        </dl>
      </Link>
    </li>
  );
}
