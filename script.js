document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".phase-text span");
    const heroSection = document.querySelector(".hero-section");
    const navbar = document.querySelector(".navbar");

    // Initial State
    gsap.set(heroSection, { display: "none" });
    gsap.set(navbar, { opacity: 0 });

    gsap.fromTo(
        letters,
        { opacity: 0, y: 50 },
        { 
            opacity: 1, 
            y: 0, 
            stagger: 0.2, 
            duration: 1, 
            ease: "power2.out",
            onComplete: () => {
                letters.forEach(letter => letter.classList.add("filled"));
                setTimeout(() => {
                    gsap.to(".intro", { opacity: 0, duration: 0.5, onComplete: () => {
                        document.querySelector(".intro").style.display = "none";
                        gsap.set(heroSection, { display: "block" });
                        gsap.to(navbar, { opacity: 1, duration: 1 });
                    }});
                }, 500);
            }
        }
    );

    // Dark Mode Toggle
    document.getElementById("dark-mode-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Mouse Hover Effect on Images
    document.querySelectorAll(".hero-image").forEach(img => {
        img.addEventListener("mousemove", (e) => {
            const { left, top, width, height } = img.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 20;
            const y = ((e.clientY - top) / height - 0.5) * 20;
            img.style.transform = `translate(${x}px, ${y}px)`;
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "translate(0, 0)";
        });
    });

    // Sticky Navbar (Fixed Position After Scrolling)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
});
