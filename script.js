document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(
        ".hero-content, .search-box, .recommendations, .hero-bg, .header, .travel-guide, .card, .animate, .destination-header, .cta-buttons, .filters, .foot-panel1, .foot-panel2, .foot-panel3, .foot-panel4, .foot-panel5, .pages, .head, .box1, .box2, .copyright .heading, hr , .testimonial,.fifthpage,.service animated"
    );

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the appropriate animation class
                    if (entry.target.classList.contains("card") || entry.target.classList.contains("animate")) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.add("animate");
                    }
                }
            });
        }, { threshold: 0.5 }
    );

    elementsToAnimate.forEach((el) => observer.observe(el));
});
var type = new Typed(".textone", {
    strings: ["Cottages", "Homes", "Holiday Homes", "Apartments"],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    backDelay: 2000,
    loop: true,
    onStringTyped: (arrayPos, self) => {
        const textElement = document.querySelector('.textone');
        textElement.style.animation = "none";
        void textElement.offsetWidth;
        textElement.style.animation = "slideUp 0.10s forwards";
    },
});
// var type = new Typed(".textone", {
//     strings: ["Cottages", "Homes", "Holiday Homes","Apartmentes"], // Corrected strings array
//     typeSpeed: 100,  
//     backSpeed: 100,  
//     backDelay: 100,  
//     loop: true        
// });
document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
  
    services.forEach((service) => {
      observer.observe(service);
    });
  });
  const menutoggle= document.getElementById('menutoggle');
const nav = document.getElementById('nav');

// Toggle the menu visibility
menutoggle.addEventListener('click', function () {
  nav.classList.toggle('active');
});

// Optional: Ensure menu is hidden when resizing back to desktop
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
  }
});
