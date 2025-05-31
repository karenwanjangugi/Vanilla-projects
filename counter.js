// set initial count
let count = 0;

// select value and buttons
const num = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    
btn.addEventListener('click', (e) => {
    const buttons = e.currentTarget.classList;
    // while (counter > 100 && c ) {
        if(buttons.contains('decrease')){
            count--;
        }
        else if(buttons.contains('increase')){
            count++;
        }
        else{
            count = 0
        }
       
        
    // }
    
value.textContent = count;
value.style.color = count > 0 ? "green" : (count < 0 ? "red" : "#222");
});

});