import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSImage,
  MicroCMSQueries,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

// ニュースの型定義
export type News = {
  title: string;
  content: string;
  date: number;
  category: string;
} & MicroCMSContentId &
  MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ニュース一覧を取得
export const getArticleList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });

  return listData;
};

// ニュース詳細を取得
export const getArticleDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });

  return detailData;
};
