const p=document.querySelector(".form-control")
const couleur=document.querySelector("#couleur")
const taille=document.querySelector("#taille")
const select=document.querySelector("#font")
p.style.fontFamily=select.value;
couleur.addEventListener("input",(e)=>{
p.style.color=couleur.value})
taille.addEventListener("input",()=>{p.style.fontSize=taille.value+"px"})
select.addEventListener("input",()=>{
    p.style.fontFamily=select.value
})
