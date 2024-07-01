const input=document.querySelector('#input')
const btn=document.querySelector('.btn')
const root=document.querySelector('.root')
function add(){
    if(input.value==""){
        alert("please the enter value")
    }
    else{
        const newElm=document.createElement('ul')
        newElm.innerHTML=`${input.value}<i class="fa-solid fa-xmark"></i>`;
     root.append(newElm)
     input.value=''
     newElm.addEventListener('click',()=>{
        newElm.remove()
     })
    }
}
btn.addEventListener("click", add)