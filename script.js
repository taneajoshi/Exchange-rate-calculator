let currency1 = document.getElementById('currency1');
let cuurency2 = document.getElementById('currency2');
let convertButton = document.getElementById('conv');
let amountGiven = document.getElementById('amount1');
let amountNeeded= document.getElementById('amount2');
let rateElem= document.getElementById('rate');  

//functions
function calculate(){
const curren1 =currency1.value;
const currenc2 =currency2.value;

fetch(`https://prime.exchangerate-api.com/v5/cbc94e6cfdd25f33a2d9d49e/latest/${curren1}`).
then(res => res.json()).   
then(data=>{
    const rate= data.conversion_rates[currenc2];
    rateElem.innerText= `1 ${curren1}= ${currenc2} ${rate}`;

   amountNeeded.value = (amountGiven.value * rate).toFixed(2);


});
}
//event handlers
currency1.addEventListener('change', calculate);
currency2.addEventListener('change', calculate);
amount1.addEventListener('input', calculate);
amount2.addEventListener('input', calculate);

calculate();