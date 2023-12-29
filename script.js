
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: "smooth" });
    }

    // Scroll to the next section on arrow down key press
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") {
            e.preventDefault(); // Prevent default scroll behavior
            const currentIndex = [...sections].findIndex((section) => section.getBoundingClientRect().top > 0);
            const nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : currentIndex;
            scrollToSection(nextIndex);
        }
    });
});
// smooth-scroll.js

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 10, // Adjust the offset if you have a fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
