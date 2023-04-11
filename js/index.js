const button = document.getElementById("btn");
let clicked = false;


const navToggle = document.querySelector(".nav-toggle")
const menuHamburger = document.querySelector(".fa-bars")
const closeBtn = document.querySelector(".fa-circle-xmark")

menuHamburger.addEventListener("click", ()=>{
    navToggle.style.left = "0%"
})

closeBtn.addEventListener("click", ()=>{
    navToggle.style.left = "-150%";

})



// const maxLink = document.getElementById("max");
// const input = document.getElementById("buyinput");

// maxLink.addEventListener("click", async () => {
//   try {
//     const accounts = await window.ethereum.enable();
//     const chainId = await web3.eth.getChainId();

//     if (chainId === 97) {
//       const balance = await web3.eth.getBalance(accounts[0]);
//       const balanceInBNB = balance / 10**18;
//       input.value = balanceInBNB - 0.01;
//       updateInput2();
//     } else {
//       alert("Please connect to Ethereum Mainnet");
//     }
//   } catch (error) {
//     alert("Please install MetaMask");
//   }
// });


const input1 = document.getElementById("buyinput");
const input2 = document.getElementById("static");


input1.addEventListener("input", updateInput2);


function updateInput2() {
  const ratio = (0.1 / 156);
  input2.value = parseFloat(input1.value) / ratio + " KRIMS";
}

window.addEventListener('load', async () => {
    try {
      const gasPrice = await web3.eth.getGasPrice();
      const gwei = gasPrice/ 1e9;
      document.getElementById('gasPrice').textContent = `${gwei} Gwei`;
    } catch (error) {
      console.error(error);
    }
});





const hamburgerBtn = document.querySelector('.hamburger');
const calculator = document.querySelector('.calculator');

hamburgerBtn.addEventListener('click', () => {
  calculator.style.display = calculator.style.display === 'none' ? 'flex' : 'none';
});

document.getElementById("leave").addEventListener("click", function() {
  console.log("Clicked")
  document.querySelector(".menu").style.zIndex = 0;
});