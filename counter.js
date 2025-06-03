// set initial count
let count = 0;
const max = 10
const min = -10

// select value and buttons
const num = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    
btn.addEventListener('click', (button) => {
    const buttons = button.currentTarget.classList;

    
   
        if(buttons.contains('decrease')){
                count--;
        }
        else if(buttons.contains('increase')){
                count++;
        }
        else{
            count = 0
        }
        if (count > max) {
            count = max;
           
          }
          if (count < min) {
            count = min;
           
          }
    

        
 
    
value.textContent = count;
value.style.color = count > 0 ? "green" : (count < 0 ? "red" : "#222");
});

});