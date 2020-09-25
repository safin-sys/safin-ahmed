const projects = document.querySelector('.projects');
const sticky = document.querySelector('.sticky');
const projectPosition = projects.offsetTop - 50;

window.addEventListener('scroll', e=>{
    if(projectPosition <= window.scrollY) {
        sticky.classList.add('transform')
    }
    if(projectPosition >= window.scrollY) {
        sticky.classList.remove('transform')
    }
})

console.log();
