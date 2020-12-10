//Stack Tab
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