import "./newsCat.scss";

function NewsCat({ title, description, url, urlToImage }) {
    return(
        <div className="news1">
            <img className="news1__img" src={urlToImage} alt={title} />
            <h3>
                <a className="news1__title" href={url}>{title}</a>
            </h3>
            <p className="news1__descr">{description}</p>
        </div>
    )
}

export default NewsCat;