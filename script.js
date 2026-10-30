"use strict";

const welcomeModal=document.getElementById("welcomeModal");
const enterSiteBtn=document.getElementById("enterSiteBtn");
const themeToggleBtn=document.getElementById("themeToggleBtn");
const themeIcon=document.getElementById("themeIcon");
const backToTop=document.getElementById("backToTop");
const currentYear=document.getElementById("currentYear");

if(currentYear){
currentYear.textContent=new Date().getFullYear();
}

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

function updateThemeIcon(){
if(!themeIcon)return;
const isLight=document.body.classList.contains("light-mode");
themeIcon.className=isLight?"fa-solid fa-moon":"fa-solid fa-sun";
}

function setTheme(theme){
const isLight=theme==="light";
document.body.classList.toggle("light-mode",isLight);
document.documentElement.classList.toggle("dark",!isLight);
document.querySelector('meta[name="theme-color"]')?.setAttribute("content",isLight?"#f3f1eb":"#080d17");
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

window.addEventListener("scroll",()=>{
if(window.scrollY>450){
backToTop?.classList.add("show");
}else{
backToTop?.classList.remove("show");
}
},{passive:true});

if(backToTop){
backToTop.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});
}

const revealElements=document.querySelectorAll(
".section-heading,.management-card,.showroom-card,.identity-strip"
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
},{threshold:.12});

revealElements.forEach(element=>observer.observe(element));
}else{
revealElements.forEach(element=>element.classList.add("visible"));
}

document.querySelectorAll("a,button").forEach(element=>{
element.addEventListener("touchstart",()=>{
element.style.transition="transform .15s ease";
},{passive:true});
});

document.querySelectorAll('a[target="_blank"]').forEach(link=>{
link.setAttribute("rel","noopener noreferrer");
});

window.addEventListener("keydown",event=>{
if(event.key==="Escape"&&welcomeModal){
enterWebsite();
}
});
