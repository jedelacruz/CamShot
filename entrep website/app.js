const openbtn = document.querySelector("#openBtn")
const closeBtn = document.querySelector('#closeBtn')
const navPage = document.querySelector("nav")

openbtn.addEventListener("click", function(){
    navPage.style.opacity = "1"
    openbtn.style.display = "none"
    closeBtn.style.display = "block"
})

closeBtn.addEventListener("click", function(){
    navPage.style.opacity = "0"
    closeBtn.style.display = "none"
    openbtn.style.display = "block"
})