import "./news-item.scss";

function NewsItem({ title, description, url, urlToImage }) {
  return (
      <div className="news__item">
        <img src={urlToImage} alt={title} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
  );
}

export default NewsItem;
