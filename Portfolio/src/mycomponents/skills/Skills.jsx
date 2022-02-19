import './skills.scss';
import {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Skills() {
    const [content] = useState([]);

    const skills = [
        {
            id: 1,
            category: "frontend",
            title: "Frontend",
            img: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            descr: "Вёрстка красивых и современных веб-страниц с полной адаптивностью под любые устройства и полноценной интерактивностью как из PSD-макета, так и без него.",
        },
        {
            id: 2,
            category: "design",
            title: "Design",
            img: "https://cdn-icons.flaticon.com/png/512/2021/premium/2021772.png?token=exp=1643037695~hmac=71c5e13bff3ddc73fb66dcf3966e4729",
            descr: "Вёрстка красивых и современных веб-страниц с полной адаптивностью под любые устройства и полноценной интерактивностью как из PSD-макета, так и без него.",

        },
    ];

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        };

    return(
        <section className="skills" id='skills'>
            <h2 className="skills__title">
                Чем я занимаюсь
            </h2>
            <div className="skills__items">
                {skills.map((skillsItem) => (
                    <div className="skills__item">
                        <img className='skills__img' src={skillsItem.img} alt="" />
                        <h3 className='skills__titles'>{skillsItem.title}</h3>
                        <p className='skills__descr'>{skillsItem.descr}</p>
                    </div>
                ))}
            </div>

            <div className="skills__cat">
                <div>
                    <Slider className='skills__list' {...settings}>
                    <div>
                        <img className='img' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="" />
                    </div>
                    <div>
                        <img className='img' src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="" />
                    </div>
                    <div>
                        <img className='img' src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
                    </div>
                    <div>
                        <img className='img' src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                    </div>
                    <div>
                        <img className='img' src="https://www.logolynx.com/images/logolynx/2a/2ab4daf7454eef5b0f564a00ed616a7d.png" alt="" />
                    </div>
                    <div>
                        <img className='img' src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" />
                    </div>
                    <div>
                        <img className='img' src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" />
                    </div>
                    <div>
                        <img className='img' src="https://miro.medium.com/max/1200/1*IGn5E-1wp5mQ2DHoevVCFA.png" alt="" />
                    </div>
                    <div>
                        <img className='img' src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" alt="" />
                    </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Skills;