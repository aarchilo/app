document.addEventListener('DOMContentLoaded', function () {
    var radioButtons = document.querySelectorAll('.radio');
    var boxes = document.querySelectorAll('.box');
    var selected_options=document.querySelectorAll('.selection');
    boxes.forEach(function (box, index) {
        box.addEventListener('click', function () {
            var existingM = document.getElementById('child');
            if (existingM) {
                existingM.remove();
            }
           var m=document.createElement('div');
           m.id = 'child';
           m.innerHTML=`</br><div id="grid-container">
          
           <div class="grid-item">size</div>
           <div class="grid-item">color</div>
           <div class="grid-item">#1 <select id="dropdown" >
           <option value="option1">M</option>
        <option value="option2" selected>S</option>
        <option value="option3">L</option>
       </select></div>
           <div class="grid-item"> <select id="dropdown" >
           <option value="option1">Pink</option>
           <option value="option2" selected>Black</option>
           <option value="option3">Yellow</option>
       </select></div>
           <div class="grid-item">#2 <select id="dropdown" >
           <option value="option1">M</option>
        <option value="option2" selected>S</option>
        <option value="option3">L</option>
       </select></div>
           <div class="grid-item"> <select id="dropdown" >
           <option value="option1">Pink</option>
           <option value="option2" selected>Black</option>
           <option value="option3">Yellow</option>
       </select></div>
       </div>`;
   
            boxes.forEach(function (box) {
                box.classList.remove('box-selected');
           
            });

          
            boxes[index].classList.add('box-selected');
            var existingpopular = document.getElementById('popular-box');
         
           if(index===1)
           {
            existingpopular.style.display='block';
           }
           else
           {
            existingpopular.style.display='none';
           }
            selected_options[index].appendChild(m);
            radioButtons[index].checked=true;
        });
    });
});