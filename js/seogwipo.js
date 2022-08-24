 

let tab = document.querySelector('list-group-item');
let contents = document.querySelector('contents');

for (let i = 0; i < tab.length; i++) { 
     tab[i].addEventListener('click', function(){
     open(i)
 })
 };

 function open(i){
     tab[i].addEventListener('click', function(){
         contents.classList.remove('show');
         contents[i].classList.add('show');
     })
 }

