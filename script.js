"use strict";

/* عناصر الموقع */
const welcomeModal=document.getElementById("welcomeModal");
const enterSiteBtn=document.getElementById("enterSiteBtn");
const themeToggleBtn=document.getElementById("themeToggleBtn");
const themeIcon=document.getElementById("themeIcon");
const backToTop=document.getElementById("backToTop");
const currentYear=document.getElementById("currentYear");

/* السنة الحالية */
if(currentYear){
currentYear.textContent=new Date().getFullYear();
}

/* شاشة الترحيب */
function enterWebsite(){
if(!welcomeModal)return;
welcomeModal.classList.add("hide");
try{
sessionStorage.setItem("qassas_entered","true");
}catch(error){}
}

let alreadyEntered=false;

try{
alreadyEntered=sessionStorage.getItem("qassas_entered")==="true";
}catch(error){}

if(alreadyEntered&&welcomeModal){
welcomeModal.classList.add("hide");
}

if(enterSiteBtn){
enterSiteBtn.addEventListener("click",enterWebsite);
}

/* الوضع الليلي والنهاري */
function updateThemeIcon(){
if(!themeIcon)return;

const isLight=document.body.classList.contains("light-mode");

themeIcon.className=isLight
?"fa-solid fa-moon"
:"fa-solid fa-sun";
}

function setTheme(theme){
const isLight=theme==="light";

document.body.classList.toggle("light-mode",isLight);
document.documentElement.classList.toggle("dark",!isLight);

const themeColor=document.querySelector('meta[name="theme-color"]');

if(themeColor){
themeColor.setAttribute(
"content",
isLight?"#f4f2ec":"#080d19"
);
}

try{
localStorage.setItem("qassas_theme",theme);
}catch(error){}

updateThemeIcon();
}

let savedTheme="dark";

try{
savedTheme=localStorage.getItem("qassas_theme")||"dark";
}catch(error){}

setTheme(savedTheme);

if(themeToggleBtn){
themeToggleBtn.addEventListener("click",()=>{
const isLight=document.body.classList.contains("light-mode");
setTheme(isLight?"dark":"light");
});
}

/* زر العودة للأعلى */
function updateBackToTop(){
if(!backToTop)return;

if(window.scrollY>450){
backToTop.classList.add("show");
}else{
backToTop.classList.remove("show");
}
}

window.addEventListener("scroll",updateBackToTop,{passive:true});

if(backToTop){
backToTop.addEventListener("click",()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
});
}

/* تأثير ظهور العناصر */
const revealElements=document.querySelectorAll(
".section-heading,.management-card,.offer-card,.about-content,.identity-box,.contact-card,.feature-item,.contact-intro"
);

revealElements.forEach(element=>{
element.classList.add("reveal");
});

if("IntersectionObserver" in window){

const observer=new IntersectionObserver((entries,obs)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
obs.unobserve(entry.target);
}
});
},{
threshold:.12
});

revealElements.forEach(element=>{
observer.observe(element);
});

}else{

revealElements.forEach(element=>{
element.classList.add("visible");
});

}

/* روابط القائمة */
document.querySelectorAll('.main-nav a').forEach(link=>{
link.addEventListener("click",()=>{
document.querySelectorAll('.main-nav a').forEach(item=>{
item.classList.remove("active");
});

link.classList.add("active");
});
});

/* تحديث القائمة حسب القسم الظاهر */
const sections=document.querySelectorAll("main section[id]");
const navLinks=document.querySelectorAll(".main-nav a");

if("IntersectionObserver" in window){

const sectionObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
navLinks.forEach(link=>{
link.classList.remove("active");

if(link.getAttribute("href")==="#"+entry.target.id){
link.classList.add("active");
}
});
}
});
},{
rootMargin:"-30% 0px -60% 0px"
});

sections.forEach(section=>{
sectionObserver.observe(section);
});

}

/* تحسين روابط النوافذ الجديدة */
document.querySelectorAll('a[target="_blank"]').forEach(link=>{
link.setAttribute("rel","noopener noreferrer");
});

/* إغلاق شاشة الترحيب بزر Escape */
window.addEventListener("keydown",event=>{
if(event.key==="Escape"&&welcomeModal){
enterWebsite();
}
});

/* منع ظهور صور مكسورة */
document.querySelectorAll("img").forEach(img=>{
img.addEventListener("error",()=>{
img.classList.add("image-error");
});
});

/* تحديث زر العودة عند تحميل الصفحة */
updateBackToTop();

/* تأثير بسيط للأزرار على الموبايل */
document.querySelectorAll("button,.primary-button,.secondary-button").forEach(element=>{
element.addEventListener("touchstart",()=>{
element.classList.add("pressed");
},{passive:true});

element.addEventListener("touchend",()=>{
element.classList.remove("pressed");
},{passive:true});
});
