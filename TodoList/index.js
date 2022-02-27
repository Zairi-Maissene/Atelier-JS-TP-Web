const nom=document.querySelector("#nom")
const content=document.querySelector("#content")
const button=document.querySelector("#submit")
const div=document.querySelector("ul")

div.innerHTML=""
button.addEventListener("click",(e)=>{
div.innerHTML+=`<li class="list-group-item"> <span>${nom.value}:${content.value}</span><i class="fas fa-trash"></i></li>`
})
div.addEventListener("click",(e)=>{
    const span=document.querySelectorAll("ul i")
    let b=false;
    for(let i=0;i<span.length;i++)
    {console.log('aa');if(span[i].tagName===e.target.tagName)b=true;}
    if(b===true)
    e.target.parentNode.parentNode.removeChild(e.target.parentNode)
})