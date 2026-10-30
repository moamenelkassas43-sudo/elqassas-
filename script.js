"use strict";

/* =====================================
   مؤسسة القصاص - Main JavaScript
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* العناصر الأساسية */
    const welcomeScreen = document.getElementById("welcomeScreen");
    const enterSite = document.getElementById("enterSite");

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileNav = document.getElementById("mobileNav");

    const backToTop = document.getElementById("backToTop");
    const currentYear = document.getElementById("currentYear");

    /* =====================================
       السنة الحالية
    ===================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* =====================================
       شاشة الترحيب
    ===================================== */

    if (welcomeScreen && enterSite) {

        const welcomeSeen = sessionStorage.getItem("alqassasWelcomeSeen");

        if (welcomeSeen === "true") {
            welcomeScreen.classList.add("welcome-hidden");
        }

        enterSite.addEventListener("click", () => {

            welcomeScreen.classList.add("welcome-hidden");

            sessionStorage.setItem("alqassasWelcomeSeen", "true");

            document.body.classList.add("site-entered");

        });

    }

    /* =====================================
       الوضع الليلي والنهاري
    ===================================== */

    const savedTheme = localStorage.getItem("alqassasTheme");

    function setTheme(theme) {

        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem("alqassasTheme", theme);

        if (themeIcon) {
            themeIcon.textContent = theme === "dark" ? "☀" : "☾";
        }

        if (themeToggle) {
            themeToggle.setAttribute(
                "aria-label",
                theme === "dark" ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"
            );
        }

    }

    const initialTheme =
        savedTheme === "light" || savedTheme === "dark"
            ? savedTheme
            : "dark";

    setTheme(initialTheme);

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const currentTheme =
                document.documentElement.getAttribute("data-theme");

            const newTheme =
                currentTheme === "dark" ? "light" : "dark";

            setTheme(newTheme);

        });

    }

    /* =====================================
       قائمة الهاتف
    ===================================== */

    function openMobileMenu() {

        if (!mobileNav || !mobileMenuToggle) return;

        mobileNav.classList.add("active");
        mobileMenuToggle.classList.add("active");

        mobileMenuToggle.setAttribute("aria-expanded", "true");
        mobileMenuToggle.setAttribute("aria-label", "إغلاق القائمة");

        document.body.classList.add("menu-open");

    }

    function closeMobileMenu() {

        if (!mobileNav || !mobileMenuToggle) return;

        mobileNav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");

        mobileMenuToggle.setAttribute("aria-expanded", "false");
        mobileMenuToggle.setAttribute("aria-label", "فتح القائمة");

        document.body.classList.remove("menu-open");

    }

    if (mobileMenuToggle && mobileNav) {

        mobileMenuToggle.addEventListener("click", () => {

            const isOpen = mobileNav.classList.contains("active");

            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }

        });

        const mobileLinks = mobileNav.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {
                closeMobileMenu();
            });

        });

        document.addEventListener("click", event => {

            const clickedInsideMenu =
                mobileNav.contains(event.target);

            const clickedToggle =
                mobileMenuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                closeMobileMenu();
            }

        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 800) {
                closeMobileMenu();
            }

        });

    }

    /* =====================================
       تأثير ظهور العناصر عند التمرير
    ===================================== */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }

    /* =====================================
       زر العودة إلى الأعلى
    ===================================== */

    function handleScroll() {

        const scrollPosition = window.scrollY;

        if (backToTop) {

            if (scrollPosition > 450) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        }

    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    handleScroll();

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth"
            });

        });

    }

    /* =====================================
       تمييز رابط القسم الحالي
    ===================================== */

    const sections = document.querySelectorAll("main section[id]");

    const navigationLinks = document.querySelectorAll(
        ".main-nav a, .mobile-nav a"
    );

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const sectionId = entry.target.id;

                        navigationLinks.forEach(link => {

                            const isActive =
                                link.getAttribute("href") === "#" + sectionId;

                            link.classList.toggle("active-link", isActive);

                        });

                    }

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

    }

    /* =====================================
       منع الروابط الفارغة من القفز للأعلى
    ===================================== */

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", event => {
            event.preventDefault();
        });

    });

    /* =====================================
       دعم تقليل الحركة
    ===================================== */

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) {

        document.documentElement.classList.add("reduced-motion");

    }

    reducedMotion.addEventListener?.("change", event => {

        document.documentElement.classList.toggle(
            "reduced-motion",
            event.matches
        );

    });

    /* =====================================
       جاهزية الموقع
    ===================================== */

    document.body.classList.add("site-ready");

    console.log("مؤسسة القصاص | الموقع جاهز للعمل");

});
