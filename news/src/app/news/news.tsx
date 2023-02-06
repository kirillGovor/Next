import NewsCard from "@/components/card/card";
import Crashable from "@/components/crashable/crashable";
import { mockCards } from "@/constants";
import { useEffect, useState } from "react";
import { News } from "../../types/cards";
import styles from "./news.module.css";
import SkeletonNews from "./skeleton";

const CATEGORY_NAME = "technology";
const NEWS_URL = "https://inshorts.deta.dev/news";

const News = () => {
  const [news, setNews] = useState<News[]>();
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const test = await fetch(`${NEWS_URL}?category=${CATEGORY_NAME}`)
      .then((res) => res.json())
      .catch((err) => {
        setError(true);
        console.error(err);
      });

    setNews(test?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <Crashable />;
  }

  return (
    <section className={styles.cards}>
      {news ? (
        <>
          {news?.map((card: News) => (
            <div key={card.id}>
              <NewsCard news={card} />
            </div>
          ))}
        </>
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
