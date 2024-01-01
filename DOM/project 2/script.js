var main=document.querySelector("#main")
var box = document.querySelector("#box");
main.addEventListener("mousemove",function(dets){
    box.style.left=dets.x+"px"
    box.style.top=dets.y+"px"
})