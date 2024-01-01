var tl=gsap.timeline();
var h4=document.querySelector("h4")
tl.to("h4",{
   top:"0",
   ease:Expo.easeInOut,
    stagger:2,
},"a")
tl.to("h4",{
    delay:2,
    ease:Expo.easeInOut,
   top:"-130%",
   stagger:2,
},"a")
var counter=document.querySelector(".counter")
gsap.to(".counter",{
    delay:6,
    y:-1000,
})
