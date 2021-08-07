import saflb from "./saflb.js";

//Stack Tab
StackTab();

function StackTab() {
    const stackBtns = document.querySelectorAll('.stack__btn');
    const stackContents = document.querySelectorAll('.stack__content');

    const state = {
        active: 'programming'
    };

    stackBtns.forEach(btn => {
        if (state.active === btn.classList[1]) {
            btn.classList.add('stack__btn-active');
        };

        stackContents.forEach(content => {
            content.id === state.active ? content.style.display = 'block' : content.style.display = "none";
        });

        btn.addEventListener('click', () => {
            stackBtns.forEach(btn => {
                btn.classList.remove('stack__btn-active');
            });

            state.active = btn.classList[1];

            if (state.active === btn.classList[1]) {
                btn.classList.add('stack__btn-active');
            };

            stackContents.forEach(content => {
                content.id === state.active ? content.style.display = 'block' : content.style.display = "none";
            });
        });
    });
}

//Projetcs
RenderProjects();

function RenderProjects() {
    const projetcs = [
        {
            img: 'img/projects/movie.png',
            alt: 'Movie website screenshot',
            title: 'Cool Movie App',
            des: 'A very cool movie app where you can definitly find something to watch. All the data comes from https://www.themoviedb.org API.',
            stack: 'React, Sass',
            git: 'https://github.com/safin-sys/cool-movie-app',
            demo: 'https://coolmovieapp.netlify.app/'
        },
        {
            img: 'img/projects/awwa.png',
            alt: 'AWWA website screenshot',
            title: 'AWWA',
            des: 'AWWA is a Singapore based social service agency. The site below is a redesign of their current site made by Nadirah Khaliq.',
            stack: 'React, Gatsby',
            git: 'https://github.com/safin-sys/awwa',
            demo: 'https://awwa.netlify.app/'
        },
        {
            img: 'img/projects/tourny.png',
            alt: 'Tourny website screenshot',
            title: 'Tourny',
            des: 'A tournament planner for the online game League of Legends. It helps show important information about gaming tournaments to the players.',
            stack: 'React, NextJS, ChakraUI',
            git: 'https://github.com/safin-sys/tourny',
            demo: 'https://tourny.netlify.app/'
        },
        {
            img: 'img/projects/rudra.png',
            alt: 'Rudra\'s website screenshot',
            title: 'Rudra\'s personal website',
            des: 'Rudra wanted to update the site frequently without touching the code, so I implemented a headless CMS.',
            stack: 'React, NextJS, SanityCMS',
            git: 'https://github.com/safin-sys/rudra-nil-utsa',
            demo: 'https://rudranilutsa.netlify.app/'
        },
        {
            img: 'img/projects/weather.png',
            alt: 'Weather website screenshot',
            title: 'Cool Weather',
            des: 'Weather App made with the help of Unsplash and Open Weather Map API. It remembers the last given location using local storage.',
            stack: 'React, Sass',
            git: 'https://github.com/safin-sys/tictactoe',
            demo: 'https://cool-weather.netlify.app/'
        },
        {
            img: 'img/projects/tic.png',
            alt: 'Tic Tac Toe screenshot',
            title: 'Cool Tic Tac Toe',
            des: 'A very simple tic tac toe game made with React.',
            stack: 'React, Sass',
            git: 'https://github.com/safin-sys/tictactoe',
            demo: 'https://cooltictactoe.netlify.app/'
        }
    ];

    const projectDOM = document.querySelector('.project');
    let html = '';

    projetcs.forEach(project => {
        const htmlTemplate = `
    <div class="project__card">
        <div class="img-container">
            <img src="${project.img}" alt=${project.alt}>
        </div>
        <div class="project__card__content">
            <a href=${project.git}><h3>${project.title}</h3></a>
            <p class="project__card__content__paragraph">${project.des}</p>
            <div class="project__card__content__footer">
                <p>${project.stack}</p>
                <a href="${project.git}" target="_blank">Github <img src="img/icons/external.svg" alt="external link icon"></a>
                ${project.demo ? `<a href="${project.demo}" target="_blank">Demo <img src="img/icons/external.svg" alt="external link icon"></a>` : ''}
            </div>
        </div>
    </div>
    `;
        html += htmlTemplate;
        projectDOM.innerHTML = html;
    });
}

//saflb('Safin Ahmed', 'https://safin.netlify.app/')