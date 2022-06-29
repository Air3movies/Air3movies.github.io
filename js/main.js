
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
function myFunction(value) {
    var x = document.getElementById("season-list");
    if (value == 1) {
        document.getElementById("season2").style.display = "none";
        x = document.getElementById("season1").style.display = "block";;
    } else if (value == 2) {
        document.getElementById("season1").style.display = "none";
        x = document.getElementById("season2").style.display = "block";
    } else if (value == 3) {
        document.getElementById("season2").style.display = "none";
        x = document.getElementById("season3").style.display = "block";
    } else if (value == 4) {
        document.getElementById("season3").style.display = "none";
        x = document.getElementById("season4").style.display = "block";
    } else if (value == 5) {
        document.getElementById("season4").style.display = "none";
        x = document.getElementById("season5").style.display = "block";
    } else if (value == 6) {
        document.getElementById("season5").style.display = "none";
        x = document.getElementById("season6").style.display = "block";
    } else {
        x = null;
    }
}
let dropdown = document.querySelector(".dropdown");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", ()=>{
    dropdown.classList.toggle("showInput");
    if(dropdown.classList.contains("showInput")){
        searchBox.classList.replace("bx-search" ,"bx-x")
    }else {

        searchBox.classList.replace("bx-x" ,"bx-search")
    }
})

// sidebar open close js code
let menuOpenBtn = document.querySelector(".dropdown .bx-menu");
let closeOpenBtn = document.querySelector(".dropdown-links .bx-x");
let dropdownLinks = document.querySelector(".dropdown-links");

menuOpenBtn.addEventListener("click", ()=>{
    dropdownLinks.style.left= "0";
});
closeOpenBtn.addEventListener("click", ()=>{
    dropdownLinks.style.left= "-100%";
});

// sidebar sub menu open close js code

let s1arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show1");
})
let s2arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show2");
})
let s3arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show2");
})
let s4arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show2");
})
let s5arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show2");
})
let s6arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show2");
})
let s7arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show2");
})
let s8arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show2");
})
let s9arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show2");
})
let s10arrow = document.querySelector("s1-arrow");
s1arrow.addEventListener("click", ()=>{
    dropdownLinks.classList.toggle("show2");
})
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