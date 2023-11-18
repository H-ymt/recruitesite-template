import Article from '@/app/_components/Article';
import { getNewsDetail } from '@/app/_libs/microcms';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return (
    <>
      <Article data={data} />
    </>
  );
}
