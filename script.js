//Transform: TranslateY(0px)
const projects = document.querySelector('.projects');
const cardsContainer = document.querySelector('.cards-container')
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

//Github API
const hiddenRepos = ['firstwebsite', 'safin-ahmed'];
fetch('https://api.github.com/users/safin-sys/repos')
    .then(res=> res.json())
    .then(res=>{
        let html ='';
        res.forEach(repo => {
            const name = repo.name;
            const des = repo.description;
            const lang = repo.language;
            const url = repo.html_url;
            const repoHtml = `
            <div class="card" onclick="location.href='${url}'">
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
            cardsContainer.innerHTML = html
        });
    });