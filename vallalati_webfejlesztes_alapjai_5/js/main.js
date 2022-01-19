let amountInput = document.querySelector("form#order input[name=amount]");
let priceField = document.querySelector(".message strong");
function showAlert() {
    //alert ("Hello world!");
    //alert("amountInput value: " + amountInput.value);
    priceField.innerHTML = amountInput.value*1200;
}
function foo(name){ return name.toUpperCase();}
console.log(foo(5));
