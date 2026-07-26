// =======================
// Destination Search
// =======================

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".destination-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// =======================
// Destination Details
// =======================

const destinations = {

Goa:{
title:"Goa",
image:"images/goa.jpg",
description:"Golden beaches, exciting nightlife and water sports.",
rating:"4.8 / 5",
location:"India",
season:"November - February",
price:"₹14,999"
},

Bali:{
title:"Bali",
image:"images/bali.jpg",
description:"Tropical paradise with beautiful temples and beaches.",
rating:"4.9 / 5",
location:"Indonesia",
season:"April - October",
price:"₹34,999"
},

Paris:{
title:"Paris",
image:"images/paris.jpg",
description:"The city of love featuring the Eiffel Tower.",
rating:"4.8 / 5",
location:"France",
season:"April - June",
price:"₹74,999"
},

Maldives:{
title:"Maldives",
image:"images/maldives.jpg",
description:"Luxury water villas and crystal clear beaches.",
rating:"4.9 / 5",
location:"Maldives",
season:"November - April",
price:"₹59,999"
},

Japan:{
title:"Japan",
image:"images/japan.jpg",
description:"Experience futuristic cities, ancient temples, cherry blossoms and rich culture.",
rating:"4.9 / 5",
location:"Japan",
season:"March - May",
price:"₹89,999"
},

Switzerland:{
title:"Switzerland",
image:"images/switzerland.jpg",
description:"Beautiful Alps, lakes and scenic train rides.",
rating:"4.9 / 5",
location:"Switzerland",
season:"December - March",
price:"₹1,09,999"
},

Dubai:{
title:"Dubai",
image:"images/Dubai.jpg",
description:"Luxury shopping, iconic skyscrapers and unforgettable desert adventures.",
rating:"4.8 / 5",
location:"United Arab Emirates",
season:"November - March",
price:"₹69,999"
},

Rome:{
title:"Rome",
image:"images/rome.jpg",
description:"Explore ancient history, stunning architecture and authentic Italian cuisine.",
rating:"4.8 / 5",
location:"Italy",
season:"April - June",
price:"₹79,999"
},

Santorini:{
title:"Santorini",
image:"images/santorini.jpg",
description:"Relax on whitewashed cliffs overlooking the crystal-blue Aegean Sea.",
rating:"4.9 / 5",
location:"Greece",
season:"May - September",
price:"₹84,999"
}

};

// Modal

const modal=document.getElementById("destinationModal");

const modalImage=document.getElementById("modalImage");
const modalTitle=document.getElementById("modalTitle");
const modalDescription=document.getElementById("modalDescription");
const modalRating=document.getElementById("modalRating");
const modalLocation=document.getElementById("modalLocation");
const modalSeason=document.getElementById("modalSeason");
const modalPrice=document.getElementById("modalPrice");

document.querySelectorAll(".exploreBtn").forEach(button=>{

button.addEventListener("click",()=>{

const card=button.closest(".destination-card");

const place=card.querySelector("h3").innerText;

const data=destinations[place];

modalImage.src=data.image;
modalTitle.innerText=data.title;
modalDescription.innerText=data.description;
modalRating.innerText=data.rating;
modalLocation.innerText=data.location;
modalSeason.innerText=data.season;
modalPrice.innerText=data.price;

modal.classList.remove("hidden");
modal.classList.add("flex");

});

});

document.getElementById("closeModal").addEventListener("click",()=>{

modal.classList.add("hidden");
modal.classList.remove("flex");

});

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.add("hidden");
modal.classList.remove("flex");

}

});


// =======================
// Book Buttons
// =======================

document.querySelectorAll(".bookBtn").forEach(button => {

    button.addEventListener("click", () => {

        alert("🎉 Booking feature will be available soon!");

    });

});


// =======================
// Contact Form
// =======================

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("✅ Thank you! We will contact you shortly.");

    form.reset();

});


// =======================
// Random Hero Video
// =======================

const videos = [
    "videos/hero1.mp4",
    "videos/hero2.mp4",
    "videos/hero3.mp4",
    "videos/hero4.mp4",
    "videos/hero5.mp4"
];

const heroVideo = document.getElementById("heroVideo");
const videoSource = document.getElementById("videoSource");

const randomVideo = videos[Math.floor(Math.random() * videos.length)];

videoSource.src = randomVideo;

heroVideo.load();

heroVideo.play();

// =======================
// Scroll To Top Button
// =======================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollBtn.classList.remove("hidden");
    } else {
        scrollBtn.classList.add("hidden");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// =======================
// Countdown Timer
// =======================

const offerDate = new Date();

offerDate.setDate(offerDate.getDate() + 12);

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = offerDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

    if(distance < 0){

        clearInterval(countdown);

        document.getElementById("days").textContent="00";
        document.getElementById("hours").textContent="00";
        document.getElementById("minutes").textContent="00";
        document.getElementById("seconds").textContent="00";

    }

},1000);

// =======================
// Gallery Lightbox
// =======================

const galleryImages = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightbox.classList.remove("hidden");

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.add("hidden");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.add("hidden");

    }

});

// =======================
// Loading Screen
// =======================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    const bar = document.getElementById("loadingBar");

    bar.style.width = "100%";

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },700);

    },2000);

});

// =======================
// AOS Animation
// =======================

AOS.init({

    duration:1000,

    once:true,

    offset:100

});

// =======================
// Mobile Menu
// =======================

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

    mobileMenu.classList.toggle("flex");

});
document.querySelectorAll("#mobileMenu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

        mobileMenu.classList.remove("flex");

    });

});

// =======================
// Active Navbar
// =======================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});