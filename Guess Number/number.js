let random_value = Math.floor(Math.random()*50+1)
let form = document.getElementById('form') 
let choose = document.getElementById('choose')
let lastresult = document.getElementById('lastresult');
let guess = document.getElementById('guess');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let number = parseInt(document.getElementById("number").value);
    let remaining = parseInt(lastresult.innerText);
    if(remaining<0){
        choose.innerHTML=`<p>Game Over! Refresh to play again.</p>`;
        document.getElementById("number").value = ""; 
        return;
    }
    else if(number>random_value){
        choose.innerHTML =  `<p>Choose the smaller number</p>`;
    }
    else if(number<random_value){
        choose.innerHTML =  `<p>Choose the greater number</p>`;
    }
    else{
        choose.innerHTML = `<p>🎉 Correct! You guessed it.</p>`;
        document.getElementById("number").value = ""; 
        return;
    }
     guess.innerText = number;
     remaining--
     lastresult.innerText = remaining;
      if (remaining <= 0) {
        choose.innerHTML = `<p>Game Over! The number was ${random_value}</p>`;
        document.getElementById("number").value = ""; 
    }
}
)