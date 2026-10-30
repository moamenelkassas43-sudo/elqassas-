/* =========================================
   AL QASSAS — AUTOMOTIVE EDITION
   MAIN JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   DOM ELEMENTS
========================================= */

const body = document.body;

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileNav = document.getElementById("mobileNav");

const backToTop = document.getElementById("backToTop");
const currentYear = document.getElementById("currentYear");


/* =========================================
   CURRENT YEAR
========================================= */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================
   THEME SYSTEM
========================================= */

function setTheme(theme) {

    const isLight = theme === "light";

    body.classList.toggle("light-theme", isLight);

    if (themeIcon) {
        themeIcon.textContent = isLight ? "☀" : "◐";
    }

    const themeColor = document.querySelector(
        'meta[name="theme-color"]'
    );

    if (themeColor) {
        themeColor.setAttribute(
            "content",
            isLight ? "#eeeae2" : "#101820"
        );
    }

    try {
        localStorage.setItem("alqassas-theme", theme);
    } catch (error) {
        console.warn("Theme preference could not be saved.");
    }
}


function getSavedTheme() {

    try {
        return localStorage.getItem("alqassas-theme");
    } catch (error) {
        return null;
    }

}


const savedTheme = getSavedTheme();

setTheme(savedTheme === "light" ? "light" : "dark");


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const isLight = body.classList.contains("light-theme");

        setTheme(isLight ? "dark" : "light");

    });

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

function closeMobileMenu() {

    if (!mobileNav || !mobileMenuToggle) return;

    mobileNav.classList.remove("open");

    mobileMenuToggle.classList.remove("active");

    mobileMenuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    mobileMenuToggle.setAttribute(
        "aria-label",
        "فتح القائمة"
    );

}


if (mobileMenuToggle && mobileNav) {

    mobileMenuToggle.addEventListener("click", () => {

        const isOpen = mobileNav.classList.toggle("open");

        mobileMenuToggle.classList.toggle(
            "active",
            isOpen
        );

        mobileMenuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        mobileMenuToggle.setAttribute(
            "aria-label",
            isOpen ? "إغلاق القائمة" : "فتح القائمة"
        );

    });


    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeMobileMenu);

    });


    document.addEventListener("click", event => {

        const clickedInsideMenu =
            mobileNav.contains(event.target) ||
            mobileMenuToggle.contains(event.target);

        if (!clickedInsideMenu) {
            closeMobileMenu();
        }

    });


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMobileMenu();
        }

    });

}


/* =========================================
   SCROLL TO TOP
========================================= */

function updateBackToTop() {

    if (!backToTop) return;

    backToTop.classList.toggle(
        "visible",
        window.scrollY > 450
    );

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);


updateBackToTop();


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(
    ".manager-profile, .about-layout, .product-feature, .contact-item"
);


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("is-visible");

    });

}


/* =========================================
   SMOOTH INTERNAL NAVIGATION
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   IMAGE FALLBACK
========================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.classList.add("image-unavailable");

        img.style.opacity = "0.25";

    });

});


/* =========================================
   EXTERNAL LINKS
========================================= */

document.querySelectorAll('a[target="_blank"]').forEach(link => {

    link.setAttribute("rel", "noopener noreferrer");

});


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.documentElement.classList.add("site-ready");

    updateBackToTop();

});


console.log(
    "%c AL QASSAS AUTOMOTIVE ",
    "background:#101820;color:#c6a779;font-size:16px;padding:12px;font-weight:bold;"
);

console.log(
    "القصاص... أمانك على الطريق."
);
