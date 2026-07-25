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
// Explore Buttons
// =======================

document.querySelectorAll(".exploreBtn").forEach(button => {

    button.addEventListener("click", () => {

        alert("Explore feature coming soon!");

    });

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