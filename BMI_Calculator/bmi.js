const form = document.querySelector('.form')
const result = document.getElementById('result')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const heightM = height / 100; 
    const bmi = (weight / (heightM * heightM)).toFixed(2);
    console.log(result)
    result.innerHTML = `<p>Your BMI is : ${bmi}</p>`
    
})