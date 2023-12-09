const form = document.querySelector('form')
const input = form.todo
const ul = document.querySelector('ul')
const h3 = document.querySelector('h3')
  
form.addEventListener('submit',function(e){
    e.preventDefault()
    const li = document.createElement('li');
    if(input.value){
        li.innerHTML = input.value
        ul.append(li)
        h3.style.display = 'none';
    const btn = document.createElement('button')
      btn.innerHTML = 'delete'
       li.append(btn)  
        input.value = "";
    }
    
})