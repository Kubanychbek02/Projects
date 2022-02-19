import { PortfolioCats } from "../index";
import "./portfolio.scss";
import { featured, webApps, reactApps } from "../../db";
import { useState, useEffect } from "react";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selected === "featured") {
      setData(featured);
    } else if (selected === "web app") {
      setData(webApps);
    } else if (selected === "react app") {
      setData(reactApps);
    } else {
      setData(featured);
    }
  }, [selected]);

  const portfolioCatItems = [
    {
      id: 1,
      category: "featured",
      title: "Featured",
    },
    {
      id: 2,
      category: "web app",
      title: "Web App",
    },
    {
      id: 3,
      category: "react app",
      title: "React Apps",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul className="portfolio__cat">
        {portfolioCatItems.map((item) => (
          <PortfolioCats
            item={item.title}
            key={`${item.title}_${item.id}`}
            category={item.category}
            active={selected === item.category}
            setSelected={setSelected}
          />
        ))}
      </ul>

      <div className="portfolio__list">
        {data.map((dataItem, idx) => (
          <div key={idx} className="portfolio__item">
            <img src={dataItem.img} alt="" />
            <h3>{dataItem.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
