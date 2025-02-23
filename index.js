

document.getElementById("close").addEventListener("click",()=>{
    document.querySelector(".popupbox").style.display="none"
})


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
    document.getElementById("cut").addEventListener("click",function(){
        document.querySelector(".slidelists").style.display="none"
    })

    document.getElementById("menubutn").addEventListener("click",function(){
        document.querySelector(".slidelists").style.transform= "translateX(-10px)";
    })

    //md screen active links//
    document.querySelectorAll(".menulist a").forEach(links => {
        links.addEventListener("click",function(){
            document.querySelectorAll(".menulist a").forEach(b =>{
                b.classList.remove("active")
               this.classList.add("active")
            })
        })
    })