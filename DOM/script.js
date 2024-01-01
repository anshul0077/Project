var st = document.querySelector("h5")
var btn = document.querySelector("button")
var flag=0
btn.addEventListener("click",function(){
    if(flag == 0){
    st.innerHTML="Friend's"
    st.style.color="Green"
    btn.innerHTML="remove"
    flag=1
    }else{
        st.innerHTML="Stanger"
        st.style.color="Red"
        btn.innerHTML="Add Friend"
        flag=0
    }
})
