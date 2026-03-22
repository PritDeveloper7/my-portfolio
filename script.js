// particles
particlesJS("particles-js",{
 particles:{number:{value:60},size:{value:3},move:{speed:2}}
});

// GSAP animation
gsap.from(".hero-content",{opacity:0,y:80,duration:1});
gsap.from(".section",{opacity:0,y:50,stagger:0.3});

// 3D tilt
document.querySelectorAll(".tilt").forEach(card=>{
 card.addEventListener("mousemove",(e)=>{
   let x=e.offsetX;
   let y=e.offsetY;
   let rotateX=(y/200)*10;
   let rotateY=(x/200)*-10;
   card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
 });
 card.addEventListener("mouseleave",()=>{
   card.style.transform="rotateX(0) rotateY(0)";
 });
});