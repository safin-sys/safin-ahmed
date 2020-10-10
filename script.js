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
    console.log(secondary.children.length);
    
    primary.addEventListener('click', e=>{
        e.target.classList.toggle('primary-rotate');
        e.target.classList.toggle('primary');
        for(let i = 0; i < secondary.children.length; i++) {
            secondary.children[i].classList.toggle('active');

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
            <div class="card" onclick="document.location.href='projectPages/${name}.html'" tabindex="0">
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
    });