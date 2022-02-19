import "./portfolio-cats.scss";

function PortfolioCats({ item, category, active, setSelected }) {
  return (
    <li
      onClick={() => {
        setSelected(category);
      }}
      className={active ? "item item--active" : "item"}
    >
      {item}
    </li>
  );
}

export default PortfolioCats;
