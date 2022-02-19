import "./aboutcat.scss";

function AboutCat({ item, category, active, setMenu}) {
    return (
        <li onClick={() => {setMenu(category)}}
        className={active ? "item item--active" : "item"}>
            {item}
        </li>
    )
}

export default AboutCat;