//Stack Tab
const stackBtns = document.querySelectorAll('.stack__btn');
const stackContents = document.querySelectorAll('.stack__content');

const state = {
    active: 'programming',
    containClass: window.innerWidth > 768 ? 'block' : 'inline-block'
};

stackBtns.forEach(btn => {
    if (state.active === btn.classList[1]) {
        btn.classList.add('stack__btn-active');
    };

    stackContents.forEach(contain => {
        contain.id === state.active ? contain.style.display = state.containClass : contain.style.display = "none";
    });
    
    btn.addEventListener('click', () => {
        stackBtns.forEach(btn => {
            btn.classList.remove('stack__btn-active');
        });

        state.active = btn.classList[1];
        
        if (state.active === btn.classList[1]) {
            btn.classList.add('stack__btn-active');
        };

        stackContents.forEach(contain => {
            contain.id === state.active ? contain.style.display = state.containClass : contain.style.display = "none";
        });
    });
});