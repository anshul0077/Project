let product=[
    { id:0, img:"./pngwing.com (2).png", brandName:"Nike",cateoNmae:"Air",prize: 40000},
    { id:1,img:"./pngwing.com (3).png", brandName:"Nike",cateoNmae:"Air Maxx",prize: 10000},
    { id:2,img:"./pngwing.com (4).png", brandName:"Addidas",cateoNmae:"sneakers",prize: 20000},
    { id:3,img:"./pngwing.com.png", brandName:"Nike",cateoNmae:"Dynamic Fit",prize: 60000},
    { id:4,img:"./—Pngtree—3d rendering black white sport_14549087.png", brandName:"Redtape",cateoNmae:"Sport",prize: 50000},
    { id:5,img:"./—Pngtree—sports shoes_15910407.png", brandName:"Puma",cateoNmae:"sport",prize: 100000},
]

// // let https=  
  let clutter=""
function loadProduct(){
  
    product.forEach((e)=>{
clutter+=`<div id="${e.id}" class="main-product-card">
<div class="images-shop"><img src="${e.img}" alt=""></div>
<div class="product-dets">
    <div class="item-name-shop">
        <h3>${e.brandName}</h3>
        <p>${e.cateoNmae}</p>
    </div>
    <div class="item-prize-shop">
        <h4>${e.prize}</h4>
    </div>
</div>

<div class="item-shop-button">
    <div>Buy Now</div>
    <button class="BTN">Add to cart</button>

</div>
</div>

    
</div>
</div>`
    })

    document.querySelector(".akku-products").innerHTML=clutter
    
}
loadProduct()




document.querySelector(".akku-products").addEventListener("click",function(e){
  let  ak;
if(e.target.tagName==='BUTTON'){
     ak=product[e.target.parentElement.dataset.id]
     console.log(ak);
}

})
