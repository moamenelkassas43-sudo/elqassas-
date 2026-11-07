<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>مؤسسة القصاص | Luxury Automotive</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700;800;900&family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

<style>
:root {
    --gold: #DCA743;
    --gold-light: #FFE6A3;
    --gold-dark: #94601B;
    --black: #080B10;
    --white: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background:
        radial-gradient(circle at top, #343b45, #080b10 65%);
    font-family: 'Cairo', sans-serif;
    color: white;
    padding: 25px 12px;
}

.control {
    max-width: 1920px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    padding: 15px;
}

.control h3 {
    color: var(--gold-light);
    font-family: 'Alexandria';
    font-size: 17px;
}

.download {
    padding: 14px 28px;
    border: 0;
    border-radius: 10px;
    background: linear-gradient(
        120deg,
        #FFF0C1,
        #DCA743,
        #956019
    );
    color: #17100A;
    font-family: 'Cairo';
    font-size: 16px;
    font-weight: 900;
    cursor: pointer;
    box-shadow: 0 8px 35px #dca74345;
    transition: .3s;
}

.download:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 45px #dca74375;
}

.stage {
    width: min(100%, 1600px);
    margin: auto;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 30px 100px #000;
}

/* =================================
   MAIN CANVAS
================================= */

#banner {
    width: 1920px;
    height: 1080px;
    position: relative;
    overflow: hidden;
    background: #10151B;
    color: white;
    isolation: isolate;
    transform-origin: top left;
}

/* BACKGROUND */

.background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -5;
}

.overlay {
    position: absolute;
    inset: 0;
    z-index: -4;

    background:
        linear-gradient(
            90deg,
            rgba(3,5,9,.95),
            rgba(3,5,9,.72) 43%,
            rgba(3,5,9,.12)
        ),
        linear-gradient(
            0deg,
            rgba(0,0,0,.96),
            transparent 60%
        );
}

/* CINEMATIC LIGHT */

.light {
    position: absolute;
    width: 1000px;
    height: 1000px;
    left: -300px;
    top: -450px;

    background: radial-gradient(
        circle,
        rgba(255,184,79,.28),
        transparent 68%
    );

    filter: blur(25px);
    z-index: -2;
}

.light2 {
    position: absolute;
    width: 600px;
    height: 600px;
    right: -200px;
    bottom: -250px;

    background: radial-gradient(
        circle,
        rgba(220,167,67,.17),
        transparent 70%
    );

    z-index: -2;
}

/* BORDER */

.border {
    position: absolute;
    inset: 30px;
    border: 2px solid rgba(220,167,67,.75);
    border-radius: 26px;
    pointer-events: none;
}

.border::before {
    content: "";
    position: absolute;
    inset: 9px;
    border: 1px solid rgba(255,255,255,.24);
    border-radius: 18px;
}

/* HEADER */

.header {
    position: absolute;
    top: 65px;
    right: 100px;
    left: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'Alexandria';
    font-size: 34px;
    font-weight: 900;
    color: var(--gold-light);
    letter-spacing: 2px;
    text-shadow: 0 5px 25px #000;
}

.logo span {
    color: white;
}

.badge {
    padding: 13px 28px;
    border-radius: 50px;

    border: 1px solid #DCA74399;

    background: rgba(255,255,255,.08);
    backdrop-filter: blur(20px);

    color: var(--gold-light);
    font-size: 22px;
    font-weight: 800;
}

/* MAIN TITLE */

.main-content {
    position: absolute;
    top: 200px;
    right: 105px;
    width: 850px;
}

.eyebrow {
    color: var(--gold-light);
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 2px;
}

h1 {
    font-family: 'Alexandria';
    font-size: 105px;
    font-weight: 900;
    line-height: 1.3;

    margin-top: 15px;

    text-shadow: 0 10px 35px #000;
}

h1 span {
    display: block;

    background: linear-gradient(
        110deg,
        #FFF0C0,
        #E7B650,
        #A66B20
    );

    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.subtitle {
    margin-top: 20px;

    font-size: 37px;
    font-weight: 900;

    color: var(--gold-light);
}

.description {
    margin-top: 20px;

    font-size: 27px;
    line-height: 1.9;

    color: #E6E7EA;
    max-width: 830px;
}

/* SERVICES */

.services {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 30px;
}

.service {
    padding: 13px 25px;

    border: 1px solid rgba(255,255,255,.3);
    border-radius: 50px;

    background: linear-gradient(
        135deg,
        rgba(255,255,255,.20),
        rgba(255,255,255,.035)
    );

    backdrop-filter: blur(20px);

    font-size: 23px;
    font-weight: 800;
}

.service strong {
    color: var(--gold-light);
}

/* MANAGEMENT CARDS */

.management {
    position: absolute;
    right: 105px;
    bottom: 175px;

    display: flex;
    gap: 22px;
}

.person {
    width: 340px;
    height: 145px;

    display: flex;
    align-items: center;
    gap: 17px;

    padding: 14px;

    border-radius: 20px;

    border: 1px solid rgba(246,196,91,.65);

    background: linear-gradient(
        135deg,
        rgba(255,255,255,.23),
        rgba(255,255,255,.045)
    );

    backdrop-filter: blur(22px);

    box-shadow: 0 15px 45px #0007;
}

.person img {
    width: 105px;
    height: 105px;

    object-fit: cover;

    border-radius: 14px;
    border: 3px solid var(--gold);
    background: #252525;
}

.person small {
    color: var(--gold-light);
    font-size: 18px;
    font-weight: 800;
}

.person h3 {
    font-family: 'Cairo';
    font-size: 25px;
    font-weight: 900;
    white-space: nowrap;
}

/* FOOTER */

.footer {
    position: absolute;
    bottom: 50px;
    right: 100px;
    left: 100px;

    padding-top: 20px;

    border-top: 1px solid #DCA74388;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.numbers {
    display: flex;
    gap: 15px;
    direction: ltr;
}

.number {
    background: rgba(0,0,0,.65);

    border: 1px solid #ffffff35;

    padding: 12px 18px;

    border-radius: 10px;

    font-family: 'Alexandria';
    font-size: 24px;
    font-weight: 800;
}

.location {
    color: var(--gold-light);
    font-size: 27px;
    font-weight: 900;
}

/* CORNER DECORATION */

.corner {
    position: absolute;
    width: 80px;
    height: 80px;
    border-color: var(--gold);
}

.corner.top {
    top: 30px;
    right: 30px;
    border-top: 5px solid;
    border-right: 5px solid;
    border-radius: 0 20px 0 0;
}

.corner.bottom {
    bottom: 30px;
    left: 30px;
    border-bottom: 5px solid;
    border-left: 5px solid;
    border-radius: 0 0 0 20px;
}

@media(max-width:600px) {
    body {
        padding: 8px 4px;
    }

    .control {
        justify-content: center;
    }

    .control h3 {
        text-align: center;
    }
}
</style>
</head>

<body>

<div class="control">

    <h3>AL QASSAS | GLOBAL AUTOMOTIVE CAMPAIGN</h3>

    <button class="download" id="download">
        تنزيل البنر بجودة عالية PNG ↓
    </button>

</div>

<div class="stage" id="stage">

<section id="banner">

    <!-- BACKGROUND IMAGE -->
    <img
        class="background"
        crossorigin="anonymous"
        src="https://files.catbox.moe/ltqv5e.png"
        alt=""
    >

    <div class="overlay"></div>
    <div class="light"></div>
    <div class="light2"></div>

    <div class="border"></div>

    <div class="corner top"></div>
    <div class="corner bottom"></div>

    <!-- HEADER -->

    <header class="header">

        <div class="logo">
            AL QASSAS <span>| القصاص</span>
        </div>

        <div class="badge">
            الجودة • الثقة • الاختيار
        </div>

    </header>

    <!-- MAIN CONTENT -->

    <main class="main-content">

        <div class="eyebrow">
            وجهتك الموثوقة لعالم الإطارات والجنوط
        </div>

        <h1>
            مؤسسة
            <span>القصاص</span>
        </h1>

        <div class="subtitle">
            لتجارة واستيراد جميع أنواع الإطارات
        </div>

        <div class="description">
            عالم من الاختيارات المتنوعة للإطارات الجديدة والمستعملة،
            مع اهتمام بالتفاصيل وثقة في التعامل.
        </div>

        <div class="services">

            <div class="service">
                <strong>إطارات</strong> جديدة
            </div>

            <div class="service">
                <strong>إطارات</strong> مستعملة
            </div>

            <div class="service">
                <strong>تجارة</strong> واستيراد
            </div>

        </div>

    </main>

    <!-- MANAGEMENT -->

    <div class="management">

        <article class="person">

            <img
                crossorigin="anonymous"
                src="https://files.catbox.moe/d2l6sp.png"
                alt="م. هشام القصاص"
            >

            <div>
                <small>الإدارة</small>
                <h3>م/ هشام القصاص</h3>
            </div>

        </article>

        <article class="person">

            <img
                crossorigin="anonymous"
                src="https://files.catbox.moe/pk0oe5.png"
                alt="م. ممدوح القصاص"
            >

            <div>
                <small>الإدارة</small>
                <h3>م/ ممدوح القصاص</h3>
            </div>

        </article>

    </div>

    <!-- CONTACT FOOTER -->

    <footer class="footer">

        <div class="numbers">

            <div class="number">
                01063328992
            </div>

            <div class="number">
                01011823193
            </div>

            <div class="number">
                01040289250
            </div>

        </div>

        <div class="location">
            كفر الشيخ • سيدي سالم
        </div>

    </footer>

</section>

</div>

<script>

const banner = document.getElementById("banner");
const stage = document.getElementById("stage");

function resizeBanner() {

    const scale = Math.min(
        stage.clientWidth / 1920,
        1
    );

    banner.style.transform = `scale(${scale})`;

    stage.style.height = (1080 * scale) + "px";

}

window.addEventListener("resize", resizeBanner);

resizeBanner();

document.getElementById("download").addEventListener("click", async function() {

    const button = this;

    button.disabled = true;
    button.textContent = "جارٍ تجهيز التصميم...";

    try {

        await Promise.all(
            [...banner.querySelectorAll("img")].map(img => {

                if (img.complete && img.naturalWidth > 0) {
                    return Promise.resolve();
                }

                return new Promise((resolve, reject) => {

                    img.onload = resolve;
                    img.onerror = reject;

                });

            })
        );

        const canvas = await html2canvas(banner, {

            width: 1920,
            height: 1080,

            scale: 1.5,

            useCORS: true,
            allowTaint: false,

            backgroundColor: "#10151B",

            logging: false

        });

        const link = document.createElement("a");

        link.download = "AL-QASSAS-LUXURY-BANNER.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

        button.textContent = "تم تجهيز البنر ✓";

    }

    catch(error) {

        console.error(error);

        alert(
            "تعذر تصدير الصورة. تأكد من تحميل الصور واتصال الإنترنت، " +
            "وقد تكون استضافة الصور تمنع التصدير بسبب إعدادات CORS."
        );

        button.textContent = "إعادة المحاولة ↓";

    }

    finally {

        button.disabled = false;

    }

});

</script>

</body>
</html>
