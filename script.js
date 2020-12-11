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
const projetcs = [
    {
        img: 'img/projects/tic.png',
        alt: 'Tic Tac Toe screenshot',
        title: 'Cool Tic Tac Toe',
        des: 'A very simple tic tac toe game made with React.',
        stack: 'React, Sass',
        git: 'https://github.com/safin-sys/tictactoe',
        demo: 'https://cooltictactoe.netlify.app/'
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
        img: 'img/projects/rudra.png',
        alt: 'Rudra\'s website screenshot',
        title: 'Rudra\'s personal website',
        des: 'Personal portfolio of Rudra. Made with vanilla JavaScript and Blogger API.',
        stack: 'JavaScript, Sass',
        git: 'https://github.com/safin-sys/rudra',
        demo: 'https://rudranilutsa.netlify.app/'
    },
    {
        img: 'img/projects/itload.png',
        alt: 'ItLoad website screenshot',
        title: 'ItLoad',
        des: 'ItLoad is an isp company based on Sylhet, Bangladesh.',
        stack: 'JavaScript, jQuery, Owl carousel, Sass',
        git: 'https://github.com/safin-sys/Itload',
        demo: 'https://safin-sys.github.io/Itload/'
    },
    {
        img: 'img/projects/bing.png',
        alt: 'Bing wallpaper of the day',
        title: 'Bing wallpaper of the day',
        des: 'It\'s a python script, running it will change the desktop wallpaper to the bing wallapaper of the day.',
        stack: 'Python',
        git: 'https://github.com/safin-sys/wallpaper-of-the-day',
        demo: null
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
    `
    html += htmlTemplate;
    projectDOM.innerHTML = html;
});