

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
    