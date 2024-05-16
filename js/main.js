// ABOUT-TAB
var tabButton = document.getElementsByClassName('tab'),
    tabContent = document.getElementsByClassName('tab-content');

tabButton[0].classList.add('active');
tabContent[0].style.display = 'block';

function city(e, x) {
    var i;
    for (i = 0; i < tabButton.length; i++) {
        tabContent[i].style.display = 'none';
        tabButton[i].classList.remove('active');
    }
    document.getElementById(x).style.display = 'block';
    e.currentTarget.classList.add('active');
}


// TESTIMONIAL
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})

