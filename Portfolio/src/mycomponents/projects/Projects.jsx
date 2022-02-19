import './projects.scss';

function Projects() {

    const projects = [
        {
          id: 1,
          title: "Чойро",
          descr: "Корпоративный сайт",
          img: "https://up-sait.ru/wp-content/uploads/2020/01/2812163.jpg",
          link: "https://event.choyro.com/",
        },
        {
          id: 2,
          title: "Чойро",
          descr: "Корпоративный сайт",
          img: "https://up-sait.ru/wp-content/uploads/2020/01/2812163.jpg",
          link: "https://bruno-simon.com/",
        },
        {
          id: 3,
          title: "Чойро",
          descr: "Корпоративный сайт",
          img: "https://up-sait.ru/wp-content/uploads/2020/01/2812163.jpg",
          link: "https://prior.co.jp/discover/en",
        },
        {
          id: 3,
          title: "Чойро",
          descr: "Корпоративный сайт",
          img: "https://up-sait.ru/wp-content/uploads/2020/01/2812163.jpg",
          link: "https://prior.co.jp/discover/en",
        },
        {
          id: 3,
          title: "Чойро",
          descr: "Корпоративный сайт",
          img: "https://up-sait.ru/wp-content/uploads/2020/01/2812163.jpg",
          link: "https://prior.co.jp/discover/en",
        },
        {
          id: 3,
          title: "Чойро",
          descr: "Корпоративный сайт",
          img: "https://up-sait.ru/wp-content/uploads/2020/01/2812163.jpg",
          link: "https://prior.co.jp/discover/en",
        },
      ];

    return(
        <section className="projects" id='projects'>
            <h2 className="projects__title">Проекты</h2>
            <div className="projects__inner">
                {projects.map((projectsItem) => (
                    <div className="projects__item">
                        <div className="projects__show">
                            <h2 className="projects__titles">{projectsItem.title}</h2>
                            <p className="projects__descr">{projectsItem.descr}</p>
                        </div>
                        <a href={projectsItem.link}><img src={projectsItem.img} alt="" className="projects__img"/></a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;