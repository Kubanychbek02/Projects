import Cat from "../aboutCat/AboutCat";
import './about.scss';

function About() {


    return(
        <section className="about" id="about">
            <h2 className="about__title">Обо мне</h2>
            <h3 className="about__subtitle">Что я хотелбы отметить</h3>
            <div className="about__block">
                <img className="about__img" src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612673649_104-p-kod-zelenogo-fona-132.jpg" alt="" />
                <div className="about__info">
                    <ul className="about__list">
                        <li>
                            <ul className="about__inner">
                                <li className="about__item">Высокое качество как графических материалов, так и внутренних алгоритмов работы сайта</li>
                                <li className="about__item">фриланс как основная деятельность, что означает полную отдачу в процессе работы над заказом</li>
                                <li className="about__item">внимательность ко всем требованиям заказчика и прояснение любых неясных моментов</li>
                                <li className="about__item">предоставление результатов на каждом значительном этапе работы с возможностью внести какие-то корректировки</li>
                                <li className="about__item"><a className="linck" href="./Кубанычбек Орозматов_резюме.pdf" download>Скачать резюме</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;