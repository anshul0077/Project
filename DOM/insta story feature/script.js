var arr=[
    
    {dp:"https://images.unsplash.com/photo-1702651598372-f8e777dabe6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",stroy:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFkeXxlbnwwfDF8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1701927461048-1e4e06671de2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",stroy:"https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhZHl8ZW58MHwxfDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkeXxlbnwwfHwwfHx8MA%3D%3D",stroy:"https://images.unsplash.com/photo-1539698103494-a76dd0436fbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhZHl8ZW58MHwxfDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1529911194209-8578109840df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFkeXxlbnwwfHwwfHx8MA%3D%3D",stroy:"https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhZHl8ZW58MHwxfDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1701927461048-1e4e06671de2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",stroy:"https://images.unsplash.com/photo-1529911194209-8578109840df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFkeXxlbnwwfHwwfHx8MA%3D%3D"},


];
var storiyan=document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem,indx){
   clutter+=`<div class="story">
   <img id="${indx}"src="${elem.dp}" alt="">
</div>`;
});
storiyan.innerHTML=clutter
storiyan.addEventListener("click",function(dets){
   document.querySelector("#fullscreen").style.display="block"
   document.querySelector("#fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`
   setTimeout(function(){
    document.querySelector("#fullscreen").style.display="none"
   },3000)
})

