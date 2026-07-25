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