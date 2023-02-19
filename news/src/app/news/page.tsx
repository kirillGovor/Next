"use client";

import ky from "ky";
import NewsCard from "@/components/card/card";
import Crashable from "@/components/crashable/crashable";
import SkeletonNews from "@/components/skeleton/skeleton";
import { mockCards } from "@/constants";
import { News } from "../../types/cards";
import styles from "./news.module.css";
import { useEffect, useState } from "react";

const CATEGORY_NAME = "technology";
const NEWS_URL = "https://inshorts.deta.dev/news";

type newsResponse = {
  category: string;
  data: News[];
  success: boolean;
};

const News = () => {
  const [news, setNews] = useState<News[]>();
  const [error, setError] = useState<string | boolean>(false);

  const fetchData = async () => {
    try {
      const news: newsResponse = await ky(
        `${NEWS_URL}?category=${CATEGORY_NAME}`
      ).json();

      if (news?.success) {
        setNews(news?.data);
      }
    } catch (error: any) {
      if (error.name === "HTTPError") {
        const errorInfo = await error.response.json();
        setError(errorInfo);
      }
      setError(error?.message);
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  if (error) {
    return (
      <main>
        <Crashable />
      </main>
    );
  }

  return (
    <section className={styles.news}>
      {news ? (
        <div className={styles.cards}>
          {news?.map((card: News) => (
            <div key={card.id}>
              <NewsCard news={card} />
            </div>
          ))}
        </div>
      ) : (
        mockCards.map((card: News) => (
          <div key={card.id}>
            <SkeletonNews key={card.id} news={card} />
          </div>
        ))
      )}
    </section>
  );
};

export default News;
