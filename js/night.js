(function () {

    let isNight = localStorage.getItem('night');
    let nightNav;

    function applyNight(value) {
        if (value.toString() === 'true') {
            document.body.classList.remove('light');
            document.body.classList.add('night');
            document.getElementById('night-icon').className ='fas fa-moon' 
        } else {
            document.body.classList.remove('night');
            document.body.classList.add('light');
            document.getElementById('night-icon').className ='fas fa-sun'
        }
    }

    function findNightNav() {
        nightNav = document.getElementById('night-nav');
        if (!nightNav) {
            setTimeout(findNightNav, 100);
        } else {
            nightNav.addEventListener('click', switchNight);
        }
    }

    function switchNight() {
        isNight = isNight ? isNight.toString() !== 'true' : true;
        applyNight(isNight);
        localStorage.setItem('night', isNight);
    }

    findNightNav();
    isNight && applyNight(isNight);
}());