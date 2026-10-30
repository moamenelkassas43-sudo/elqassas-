/* =========================================
   AL QASSAS — MAIN JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ELEMENTS
    ===================================== */

    const welcomeScreen = document.getElementById("welcomeScreen");
    const enterSite = document.getElementById("enterSite");

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileNav = document.getElementById("mobileNav");

    const backToTop = document.getElementById("backToTop");
    const currentYear = document.getElementById("currentYear");

    /* =====================================
       CURRENT YEAR
    ===================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* =====================================
       WELCOME SCREEN
    ===================================== */

    if (welcomeScreen && enterSite) {

        const hasVisited = sessionStorage.getItem("qassasVisited");

        if (hasVisited) {
            welcomeScreen.classList.add("hide");
        }

        enterSite.addEventListener("click", () => {

            welcomeScreen.classList.add("hide");

            sessionStorage.setItem("qassasVisited", "true");

            document.body.classList.add("site-entered");

        });

    }

    /* =====================================
       THEME SYSTEM
    ===================================== */

    const savedTheme = localStorage.getItem("qassasTheme");

    function applyTheme(theme) {

        document.documentElement.setAttribute("data-theme", theme);

        if (themeIcon) {

            themeIcon.textContent =
                theme === "light" ? "☾" : "☼";

        }

        if (themeToggle) {

            themeToggle.setAttribute(
                "aria-label",
                theme === "light"
                    ? "تفعيل الوضع الليلي"
                    : "تفعيل الوضع النهاري"
            );

        }

        localStorage.setItem("qassasTheme", theme);

    }

    applyTheme(savedTheme === "light" ? "light" : "dark");

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const currentTheme =
                document.documentElement.getAttribute("data-theme") || "dark";

            const newTheme =
                currentTheme === "dark" ? "light" : "dark";

            applyTheme(newTheme);

        });

    }

    /* =====================================
       MOBILE NAVIGATION
    ===================================== */

    function closeMobileMenu() {

        if (!mobileNav || !mobileMenuToggle) return;

        mobileNav.classList.remove("open");

        mobileMenuToggle.classList.remove("active");

        mobileMenuToggle.setAttribute("aria-expanded", "false");

        mobileMenuToggle.setAttribute("aria-label", "فتح القائمة");

    }

    if (mobileMenuToggle && mobileNav) {

        mobileMenuToggle.addEventListener("click", () => {

            const isOpen = mobileNav.classList.toggle("open");

            mobileMenuToggle.classList.toggle("active", isOpen);

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

            const clickedInside =
                mobileNav.contains(event.target) ||
                mobileMenuToggle.contains(event.target);

            if (!clickedInside) {
                closeMobileMenu();
            }

        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 760) {
                closeMobileMenu();
            }

        });

    }

    /* =====================================
       SCROLL REVEAL
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
                rootMargin: "0px 0px -35px 0px"
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
       BACK TO TOP
    ===================================== */

    function handleScroll() {

        if (!backToTop) return;

        if (window.scrollY > 450) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

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
                behavior: "smooth"
            });

        });

    }

    /* =====================================
       HEADER SCROLL EFFECT
    ===================================== */

    const header = document.querySelector(".site-header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();

    /* =====================================
       ACTIVE NAVIGATION
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
                                link.getAttribute("href") === `#${sectionId}`;

                            link.classList.toggle("active", isActive);

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
       IMAGE FALLBACK
    ===================================== */

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", () => {

            img.classList.add("image-error");

        });

    });

    /* =====================================
       SMOOTH ANCHOR NAVIGATION
    ===================================== */

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

    /* =====================================
       CONSOLE BRANDING
    ===================================== */

    console.log(
        "%c مؤسسة القصاص ",
        "background:#0a111d;color:#e0c99b;font-size:18px;font-weight:bold;padding:12px;border:1px solid #c6aa75;"
    );

    console.log(
        "%c أمانك على الطريق ",
        "color:#c6aa75;font-size:13px;font-weight:bold;"
    );

});
