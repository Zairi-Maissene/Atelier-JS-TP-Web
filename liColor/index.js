document.querySelector("ul").addEventListener("click",(e)=>{
    if(e.target.tagName==='LI')
e.target.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`

})