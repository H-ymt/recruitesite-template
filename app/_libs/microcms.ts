import type { MicroCMSContentId, MicroCMSDate, MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";
import { notFound } from "next/navigation";

// ニュースの型定義
export type News = {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
};

// メタ情報の型定義
export type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
};

export type Article = News & MicroCMSContentId & MicroCMSDate;

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
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<News>({
      endpoint: "news",
      queries,
    })
    .catch(notFound);

  return listData;
};

// ニュース詳細を取得
export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<News>({
      endpoint: "news",
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

// メタ情報を取得
export const getMeta = async (queries?: MicroCMSQueries) => {
  const data = await client
    .getObject<Meta>({
      endpoint: "meta",
      queries,
    })
    .catch(() => null);

  return data;
};
