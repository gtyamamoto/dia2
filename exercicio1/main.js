

(function(){

  const  btn = document.querySelector("#btn")
  const input = document.querySelector("#inputString")
  const responseData = document.querySelector("#responseData")

  btn.addEventListener('click',(ev)=>{
      responseData.textContent = input.value;
  })
})();