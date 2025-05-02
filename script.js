let seta = document.querySelector('.seta')
let nav = document.querySelector('.nav')

seta.addEventListener("click", ()=>{
  
  if(nav.classList.contains('ativo')) {
    nav.classList.remove('ativo')
    seta.classList.remove('virou')
  }
  else{
    nav.classList.add('ativo')
    seta.classList.add('virou')
  }
  
})