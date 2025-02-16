document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".phase-text span");

    // Letter-by-Letter Animation
    letters.forEach((letter, index) => {
        gsap.to(letter, { 
            opacity: 1, 
            duration: 0.5, 
            delay: index * 0.3, 
            onComplete: () => {
                letter.style.color = "white"; // Fill effect
            }
        });
    });

    // Transition to Main Page After Animation
    gsap.to(".intro", { opacity: 0, duration: 1, delay: 2, onComplete: () => {
        document.querySelector(".intro").style.display = "none";
        document.querySelector(".main-page").style.display = "block";

        // Hero Section Animation
        gsap.from(".title", { opacity: 0, y: 50, duration: 1 });
        gsap.from(".subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
        gsap.from(".cta-button", { opacity: 0, y: 50, duration: 1, delay: 0.6 });
    }});
});
