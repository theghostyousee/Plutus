const APY = 200000;
const INTEREST_RATE = 0.00086791796503024762880;
const REWARD_YIELD = 0.034;

const amountInput = document.querySelector("#amount");
const rangeInput = document.querySelector(".range");
const displayAmount = document.querySelector("#display-amount");

rangeInput.addEventListener("input", function() {

    const rangeValue = parseInt(document.getElementById("rangeValue").textContent.split(" ")[0]);
    let amount = parseFloat(amountInput.value);
    const pricePurchase = parseFloat(document.getElementById("price-purchase").value);
    const dailyPercentageGain = 0.03282 / 100;
    let newAmount = amount;
    for (let i = 0; i < rangeValue; i++) {
        newAmount *= (1 + (48 * dailyPercentageGain));
    }
    let displayAmountValue = `${newAmount.toFixed(2)}`;
    displayAmount.innerHTML = displayAmountValue;

    let fixedamount = parseFloat(amountInput.value);
    const futurePrice = parseFloat(document.getElementById("future-price").value);
    const displayAmountNumber = parseFloat(displayAmountValue.split(" ")[0]);
    console.log(fixedamount,newAmount, pricePurchase, futurePrice, rangeValue);
    const potentialReturn = (newAmount * futurePrice) +  ((fixedamount * futurePrice) - (fixedamount * pricePurchase));
    
    document.getElementById("potential-return").innerHTML = `$${potentialReturn.toFixed(2)}`;
});



document.getElementById("amount").addEventListener("input", function() {

    const rangeValue = parseInt(document.getElementById("rangeValue").textContent.split(" ")[0]);
    const amount = parseFloat(document.getElementById("amount").value);
    const pricePurchase = parseFloat(document.getElementById("price-purchase").value);
    const initialInvestment = amount * pricePurchase;
    document.getElementById("initial-investment").innerHTML = `$${initialInvestment.toFixed(2)}`;
    const futurePrice = parseFloat(document.getElementById("future-price").value);
    const displayAmount = parseFloat(document.getElementById("display-amount").textContent.split(" ")[0]);
    console.log(amount, pricePurchase, futurePrice, rangeValue);
    const potentialReturn = (amount * futurePrice) - (amount * pricePurchase) + (rangeValue * futurePrice);
    
    document.getElementById("potential-return").innerHTML = `$${potentialReturn.toFixed(2)}`;
  });
  
document.getElementById("price-purchase").addEventListener("input", function() {


    const rangeValue = parseInt(document.getElementById("rangeValue").textContent.split(" ")[0]);
    const amount = parseFloat(document.getElementById("amount").value);
    const pricePurchase = parseFloat(document.getElementById("price-purchase").value);
    const initialInvestment = amount * pricePurchase;
    const futurePrice = parseFloat(document.getElementById("future-price").value);
    const displayAmount = parseFloat(document.getElementById("display-amount").textContent.split(" ")[0]);
    console.log(amount, pricePurchase, futurePrice, rangeValue);
    const potentialReturn = (amount * futurePrice) - (amount * pricePurchase) + (rangeValue * futurePrice);
    
    document.getElementById("potential-return").innerHTML = `$${potentialReturn.toFixed(2)}`;
    document.getElementById("initial-investment").innerHTML = `$${initialInvestment.toFixed(2)}`;
});
  
document.getElementById("future-price").addEventListener("input", function() {

    const rangeValue = parseInt(document.getElementById("rangeValue").textContent.split(" ")[0]);
    const amount = parseFloat(document.getElementById("amount").value);
    const pricePurchase = parseFloat(document.getElementById("price-purchase").value);
    const futurePrice = parseFloat(document.getElementById("future-price").value);
    const displayAmount = parseFloat(document.getElementById("display-amount").textContent.split(" ")[0]);
    console.log(amount, pricePurchase, futurePrice, rangeValue);
    const potentialReturn = (amount * futurePrice) - (amount * pricePurchase) + (rangeValue * futurePrice);
    
    document.getElementById("potential-return").innerHTML = `$${potentialReturn.toFixed(2)}`;
});
