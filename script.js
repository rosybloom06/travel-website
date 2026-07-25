const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".destination-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(value))
            card.style.display="block";
        else
            card.style.display="none";

document.querySelectorAll(".exploreBtn").forEach(button=>{

button.addEventListener("click",()=>{

alert("Explore feature coming soon!");
const bookButtons = document.querySelectorAll(".bookBtn");

bookButtons.forEach(button=>{

button.addEventListener("click",()=>{

alert("🎉 Booking feature will be available soon!");
const form=document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you! We will contact you shortly.");

form.reset();

});

});

});

});

});

});

});
