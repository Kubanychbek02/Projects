import { useState, useEffect } from "react";
import axios from "axios";

import { NewsCat } from "..";
import "./news.scss";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=10&apiKey=8b85665bd43947f89eda5a3431f75305");

      setNews(res.data.articles);
      console.log(res);
    };
    getNews();
  }, []);

  return (
    <section className="news" id="news">
      <h2>Our Latest News</h2>

      <div className="news__list">
        {news.map((item, idx) => (
          <NewsCat
            title={item.title}
            description={item.description}
            url={item.url}
            urlToImage={item.urlToImage}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}

export default News;
