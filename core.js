document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("navbar-toggle").addEventListener('click', function() {
        toggleNav();
    });
    
    const links = document.getElementsByClassName('nav-link');
    for(element of links) {
        element.addEventListener('click', function() {
            toggleNav();
        });
    }
});


function toggleNav() {
    const nav = document.getElementById('nav');
    if(nav.classList.contains('active')) {
        nav.classList.remove('active');
    }else {
        nav.classList.add('active');
    }
}