
// Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

const search = document.querySelector(".search-box input"),
      movies = document.querySelectorAll(".movie-box");

search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searcValue = search.value,
        value = searcValue.toLowerCase();
        movies.forEach(movie =>{
            if(value === movie.dataset.name){
                return movie.style.display = "block";
            }
            movie.style.display = "none";
        })

        
        console.log(value);
    }
})
// Show Video
let playButton = document.querySelector('.play-movie')
let Video = document.querySelector('.video-container')
let myvideo = document.querySelector('#myvideo')
let closebtn = document.querySelector('.close-video')

playButton.onclick = () => {
    Video.classList.add('show-video')
    // Auto play when click on button
    myvideo.play();
};
closebtn.onclick = () => {
    Video.classList.remove('show-video')
    // Pause on close video
    myvideo.pause();
};

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Load more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Load less"; 
      moreText.style.display = "inline";
    }
  }