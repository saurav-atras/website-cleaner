// ================================
// PRELOADER
// ================================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.transition = "0.5s";

        preloader.style.opacity = "0";

        setTimeout(function(){

            preloader.remove();

        },500);

    }

});

// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}



// ================= AUTO HIDE HEADER =================
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){
        header.classList.add("hide"); // scroll down
    } else {
        header.classList.remove("hide"); // scroll up
    }

    lastScroll = currentScroll;
});


// ================= HERO SLIDER =================
const slides = document.querySelectorAll(".slide");

if(slides.length > 0){

let index = 0;

function showSlide(){

    slides.forEach(slide=>slide.classList.remove("active"));

    slides[index].classList.add("active");

    index++;

    if(index>=slides.length){

        index=0;

    }

}

setInterval(showSlide,4000);

}
let index = 0;

function showSlide(){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index++;

    if(index === slides.length){
        index = 0;
    }
}

setInterval(showSlide, 4000);

// ================================
// STICKY HEADER
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 100) {
        header.style.padding = "0 8%";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
    } else {
        header.style.padding = "0 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    }

});

// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = parseInt(counter.innerText);

        let count = +counter.getAttribute("data-count") || 0;

        const increment = target / 80;

        if (count < target) {

            count += increment;

            counter.innerText = Math.ceil(count) + "+";

            counter.setAttribute("data-count", count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================================
// FAQ ACCORDION
// ================================

const faqs = document.querySelectorAll("details");

faqs.forEach(item => {

    item.addEventListener("toggle", () => {

        if (item.open) {

            faqs.forEach(other => {

                if (other !== item) {

                    other.open = false;

                }

            });

        }

    });

});

// ================================
// TESTIMONIAL AUTO SLIDER
// ================================

const testimonialContainer = document.querySelector(".testimonial-container");

if (testimonialContainer) {

    let scrollAmount = 0;

    setInterval(() => {

        scrollAmount += 350;

        if (scrollAmount >= testimonialContainer.scrollWidth) {

            scrollAmount = 0;

        }

        testimonialContainer.scrollTo({

            left: scrollAmount,

            behavior: "smooth"

        });

    }, 3500);

}

// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
".card,.industry-card,.gallery-box,.testimonial-card,.stat-box,.feature,.contact-form,.contact-info"
);

const reveal = () => {

    const trigger = window.innerHeight - 100;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// ================================
// ACTIVE NAV LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

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

// ================================
// GALLERY IMAGE ZOOM
// ================================

document.querySelectorAll(".gallery-box img").forEach(img => {

    img.addEventListener("click", () => {

        window.open(img.src);

    });

});

console.log("Prime Facility Services Loaded Successfully 🚀");
/*==================================
NAVBAR BACKGROUND CHANGE
==================================*/

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "#ffffff";
        header.style.transition = ".4s";

    } else {

        header.style.background = "rgba(255,255,255,.95)";

    }

});

/*==================================
FLOATING ANIMATION
==================================*/

document.querySelectorAll(".card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/*==================================
NUMBER COUNT ANIMATION
==================================*/

function animateValue(obj, start, end, duration) {

    let startTime = null;

    function animation(currentTime) {

        if (!startTime) startTime = currentTime;

        const progress = Math.min((currentTime - startTime) / duration, 1);

        obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";

        if (progress < 1) {

            requestAnimationFrame(animation);

        }

    }

    requestAnimationFrame(animation);

}

document.querySelectorAll(".counter").forEach(counter => {

    animateValue(counter, 0, parseInt(counter.innerHTML), 2500);

});

/*==================================
BUTTON RIPPLE EFFECT
==================================*/

document.querySelectorAll("button,.btn1,.btn2,.cta-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

let ripple=document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

let x=e.clientX-this.offsetLeft;

let y=e.clientY-this.offsetTop;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*==================================
IMAGE HOVER EFFECT
==================================*/

document.querySelectorAll(".gallery-box img").forEach(img=>{

img.addEventListener("mousemove",()=>{

img.style.transform="scale(1.12)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/*==================================
CURRENT YEAR
==================================*/

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© ${year} Prime Facility Services. All Rights Reserved.`;

}

console.log("Premium Features Loaded Successfully");