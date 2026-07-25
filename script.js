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

Tokyo:{
title:"Tokyo",
image:"images/tokyo.jpg",
description:"A perfect mix of modern technology and culture.",
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

Kashmir:{
title:"Kashmir",
image:"images/kashmir.jpg",
description:"Paradise on Earth with snow-covered mountains.",
rating:"4.9 / 5",
location:"India",
season:"March - October",
price:"₹24,999"
},

"New York":{
title:"New York",
image:"images/newyork.jpg",
description:"Explore Times Square and the Statue of Liberty.",
rating:"4.8 / 5",
location:"USA",
season:"April - June",
price:"₹1,19,999"
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