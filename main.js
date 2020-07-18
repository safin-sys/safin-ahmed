let toggleNavStatus = false;

let toggleNav = function() {
    let getClose = document.querySelector('nav.phone');

    if (toggleNavStatus === false) {
        getClose.style.visibility = "visible";
        toggleNavStatus = true;
    }
}

let toggleNav2 = function() {
    let getClose = document.querySelector('nav.phone');

    if (toggleNavStatus === true) {
        getClose.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}

const comingSoon = function() {
    alert('This feature is under construction, try again later.')
}

const dunno = function() {
    alert('Still learning.')
}