//Transform: TranslateY(0px)
const projects = document.querySelector('.projects');
const sticky = document.querySelector('.sticky');
const projectPosition = projects.offsetTop - 50;

window.addEventListener('scroll', e=>{
    if(projectPosition <= window.scrollY) {
        sticky.classList.add('transform');
    };
    if(projectPosition >= window.scrollY) {
        sticky.classList.remove('transform');
    };
});

//Collapsable Language
const collapsable = document.querySelectorAll('.collapsable');

collapsable.forEach(elem=>{
    const primary = elem.children[0];
    const secondary = elem.children[1];
    
    primary.addEventListener('click', e=>{
        for(let i = 0; i < secondary.children.length; i++) {
            secondary.children[i].classList.toggle('active');
            e.target.classList.toggle('primary-rotate');
            e.target.classList.toggle('primary');

            if(secondary.children[i].classList.contains('active')){
                secondary.children[i].style.display = 'block';
                secondary.children[i].style.overflow = 'visible';
                secondary.children[i].style.maxHeight = secondary.scrollHeight +'px';
            } else {
                secondary.children[i].style.overflow = 'hidden';
                secondary.children[i].style.maxHeight = '0px';
                setTimeout(()=>{secondary.children[i].style.display = 'none';}, 400);
            };
        };
    });
});

//Github API
const hiddenRepos = ['firstwebsite', 'safin-ahmed'];

const cardsContainer = document.querySelector('.cards-container')
fetch('https://api.github.com/users/safin-sys/repos')
    .then(res=> res.json())
    .then(res=>{
        let html ='';
        let cardinfoHtml = '';
        res.forEach(repo => {
            const name = repo.name;
            const des = repo.description;
            const lang = repo.language;

            //Projects
            const repoHtml = `
            <div class="card">
                <section>
                    <h1>${name}</h1>
                    <p class="description">${des}</p>
                    <div class="${lang}"></div><p class="language">${lang}</p>
                </section>
            </div>
            `
            if(hiddenRepos.indexOf(name) == '-1'){
                html += repoHtml;
            };
            cardsContainer.innerHTML = html;
        });
        //Projects Page
        const body = document.querySelector('body');
        const main = document.querySelector('main');
        const projects = document.querySelector('.projects');
        const lang = document.querySelector('.lang');
        const footer = document.querySelector('footer');
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card=>{
            card.addEventListener('click', e=>{
                const name = e.currentTarget.querySelector('h1').textContent;
                fetch('https://api.github.com/repos/safin-sys/' + name)
                    .then(res=>res.json())
                    .then(repo=>{
                        const des = repo.description;
                        const url = repo.html_url;
                        const homepage = repo.homepage;

                        const projectsPageHtml = `
                        <div class="cards-info-container">
                            <div class="card-info">
                                <div class="card-info-nav">
                                    <button id="close-btn"><img src="img/arrow.svg" alt="close button"></button>
                                </div>
                
                                <div class="img-container">
                                    <img src="img/valorant.jpg" alt="Valorant">
                                </div>
                
                                <div class="card-info-body">
                                    <div class="card-title">
                                        <h1>${name}</h1>
                                        <h6>${des}</h6>
                                    </div>
                
                                    <div class="card-info-cta">
                                        <a id="github-cta" href="${url}" role="button"><img src="img/github.svg" alt="github icon"> View on Github</a>
                                        <a id="demo" href="${homepage}" role="button">Demo</a>
                                    </div>
                
                                    <div class="tabs">
                                        <div class="tab-btns">
                                            <button class="summary active-tab">Summary</button>
                                            <button class="languages">Languages</button>
                                            <button class="photos">Photos</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                        
                        main.style.display = 'none';
                        projects.style.display = 'none';
                        lang.style.display = 'none';
                        footer.style.display = 'none';
                        window.scrollTo(0,0);
                        body.innerHTML += projectsPageHtml;

                        //Close Button
                        const cardInfoContainer = document.querySelector('.cards-info-container');
                        const closeBtn = document.querySelector('#close-btn');
                        closeBtn.addEventListener('click', e=> {
                            cardInfoContainer.style.display = 'none';
                        });
                    });
            });
        });
    });
