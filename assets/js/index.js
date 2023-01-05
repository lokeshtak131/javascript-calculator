function calFunction(){
    
    let screen = document.querySelector(".cal-input");
    let buttons = document.querySelectorAll(".cal-btns");
    let equal = document.querySelector(".cal-btns-green");
    let clear = document.querySelector(".cal-btns-red");

    buttons.forEach(function(button){
        button.addEventListener('click' , function(e){
            // debugger
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click' , function(e){
        if (screen.value === '') {
            screen.value = 'Please enter value';
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener("click" , function(e){
        screen.value = ''
    });
}
calFunction();