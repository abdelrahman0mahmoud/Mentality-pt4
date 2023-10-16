/*=====================Swiper================ */
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 27,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints : {
        0:{
            slidesPerView: 1,
            initialSlide: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        }
    },
  });


/*======================== toggle icon navbar ================================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

/*======================== scroll section active links ================================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*======================== sticky navbar ================================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /*======================== remove navbar ================================== */
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};
/*======================== scroll reveal ================================== */
ScrollReveal({
    // reset : true, //to reset it without reload
    distance : '80px',
    duration : 2000,
    delay : 200
});
ScrollReveal().reveal('.home-content , .heading ' , {origin: 'top'});
/*======================== typed js ================================== */
const typed = new Typed('.multiple-text', {
    strings: ['&lt;code&gt; Programming is a Super Power &lt;/code&gt;'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    showCursor: true, 
    contentType: 'html'
});


//====================== send parameters ==========================
// Add click event listeners to the buttons
document.getElementById("htmlBtn").addEventListener("click", function() {
    window.location.href = "course.html?content=html";
});

// document.getElementById("cssBtn").addEventListener("click", function() {
//     window.location.href = "course.html?content=css";
// });

// document.getElementById("jsBtn").addEventListener("click", function() {
//     window.location.href = "course.html?content=javascript";
// });
////////////////////////////////////////////////////////////////////////