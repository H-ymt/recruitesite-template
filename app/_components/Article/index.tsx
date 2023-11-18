import { Article } from '@/app/_libs/microcms';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1>{data.title}</h1>
      <div>
        <p>{data.date}</p>
      </div>
    </main>
  );
}
