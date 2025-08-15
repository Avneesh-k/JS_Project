const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button')

buttons.forEach((button)=>{

    button.addEventListener('click',function changeBodycolor(e){
        const color = window.getComputedStyle(e.target).backgroundColor;
        console.log(color)
         body.style.backgroundColor = color;
    })
})