


//active links//
document.querySelectorAll(".dash a").forEach(link => {
    link.addEventListener("click",function(){
        document.querySelectorAll(".dash a").forEach(a =>{
            a.classList.remove("active")
           this.classList.add("active")
        })
    })
})
    // slidemenu//
    document.getElementById("cut2").addEventListener("click",function(){
        document.querySelector(".slidelists").style.display="none"
    })

    document.getElementById("menubutn2").addEventListener("click",function(){
        document.querySelector(".slidelists").style.transform= "translateX(-10px)";
    })