const cardInfoContainer = document.querySelector('.cards-info-container');
const htmlPathName = window.location.pathname;

fetch('https://api.github.com/users/safin-sys/repos')
.then(res=> res.json())
.then(res=>{
    res.forEach(repo=>{
        const name = repo.name;
        const des = repo.description;
        const url = repo.html_url;
        const home = repo.homepage;
        if(htmlPathName.includes(name)){
            //Card Title
            const title = document.querySelector('title')
            const cardName = document.querySelector('.card-title>h1');
            const cardDes = document.querySelector('.card-title>h6');
            //Buttons
            const githubBtn = document.querySelector('#github-btn');
            const demoBtn = document.querySelector('#demo-btn');
            
            title.textContent = name;
            cardName.textContent = name;
            cardDes.textContent = des;

            githubBtn.setAttribute('href', url);
            demoBtn.setAttribute('href', home);
        };

        const closeBtn = document.querySelector('#close-btn');
        closeBtn.addEventListener('click', e=>{
            window.history.back();
        });
    });
});