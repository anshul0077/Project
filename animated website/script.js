





var tl =gsap.timeline();
tl.from("#nav h1",{
    x:-250,
    duration:1,

    opacity:0,

})
tl.from("#nav .navpart2 h4" ,{
    y:250,
    duration:1,

    opacity:0,
    stagger:0.2

})
tl.from("#nav .navpart2 button" ,{
    y:250,
    duration:1,
    scale:5,
   
    opacity:0,
  

})
gsap.from("#page1 #name h1" ,{
    y:250,
    duration:1,
   
    opacity:0,
  

})
tl.from("#page1 #name p" ,{
    x:350,
    duration:1,
  
    opacity:0,
  

})
gsap.from("#page1 .para h6" ,{
    y:-50,
    duration:1,
  
    opacity:0,
  

})
tl.from("#page1 .para button" ,{
    x:-200,
    duration:1.5,
  

    opacity:0,
  

})
tl.from("#page2 #navlike h2",{
    x:-400,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2 #navlike h2",
        scrub:3,
      
        start:"top 70%",
end:"top 20%"
    }
    
})
tl.from("#page2 #navlike .line",{
    x:400,
    duration:1.5,
    stagger:0.3,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2 #navlike .line",
        scrub:3,
      
        start:"top 70%",
end:"top 20%"
    }
    
})
tl.from("#page2 .boxcntn .box1",{
    x:-500,
    duration:2,
    opacity:0,
        scrollTrigger:{
        scroller:"body",
        trigger:"#page2 .boxcntn .box1 ",
        scrub:3,
      
        start:"top 70%",
end:"top 20%"
}
})
tl.from("#page2 .boxcntn .box3",{
    x:500,
    duration:2,
    opacity:0,
        scrollTrigger:{
        scroller:"body",
        trigger:"#page2 .boxcntn .box3 ",
        scrub:3,
      
        start:"top 70%",
end:"top 20%"
}
})
tl.from("#page2 .boxcntn .box2",{
    Y:600,
    duration:2,
    opacity:0,
        scrollTrigger:{
        scroller:"body",
        trigger:"#page2 .boxcntn .box2 ",
        scrub:3,
      
        start:"top 70%",
end:"top 20%"
}
})
tl.from("#page3 #navlike h2",{
    x:-400,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #navlike h2",
        scrub:3,
      
        start:"top 70%",
end:"top 20%"
    }
    
})
tl.from("#page3 #navlike .line",{
    x:400,
    duration:1.5,
    stagger:0.3,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #navlike .line",
        scrub:3,
      
        start:"top 70%",
end:"top 20%"
    }
    
})
tl.from("#page3 .image img",{
x:-500,
opacity:0,
scrollTrigger:{
    scroller:"body",
    trigger:"#page3 .image img ",
    scrub:3,
  
    start:"top 70%",
end:"top 20%"
}
})
tl.from("#page3 .bottombar .icons i",{
scale:0,
opacity:0,
scrollTrigger:{
    scroller:"body",
    trigger:"#page3 .bottombar .icons i",
    scrub:3,
  
start:"top 110%",
end:"top 100%",

}
})