var ele = document.querySelectorAll(".element")

ele.forEach(function(val){
val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity=1
    // val.style.backgroundColor="red"
})
val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity=0
})
val.addEventListener("mousemove",function(dets){
   val.childNodes[3].style.left=dets.x+"px"
   val.childNodes[3].style.top=dets.y+"px"
})

})






















// var img = document.querySelector(".element img")
// ele.addEventListener("mousemove",function(dets){
//    img.style.left=dets.x+"px"
//    img.style.top=dets.y+"px"
  
// })
// ele.addEventListener("mouseenter",function(){
//     img.style.opacity="1";
  
// })
// ele.addEventListener("mouseleave",function(){
//     img.style.opacity="0";
// })