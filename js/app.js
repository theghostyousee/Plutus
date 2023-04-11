let web3 = new web3js.myweb3(window.ethereum);
let addr;


let sttcontract = new web3.eth.Contract(sttabi, sttaddr);



const loadweb3 = async () => {
  try {
    web3 = new web3js.myweb3(window.ethereum);
    console.log("Injected web3 detected.");
    sttcontract = new web3.eth.Contract(sttabi, sttaddr);
    let a = await ethereum.enable();
    addr = web3.utils.toChecksumAddress(a[0]);

    console.log(addr)
    return addr;
  } catch (error) {
    if (error.code === 4001) {
      console.log("Please connect to MetaMask.");
    } else {
      Swal.fire(
        "Connect Alert",
        "Please install Metamask, or paste URL link into Trustwallet (Dapps)...",
        "error"
      );
    }
  }
};

const PleaseWait = async () => {
  Swal.fire(
    "Server Busy",
    "There are too many request, Please Try after few min.",
    "error"
  );
};

const connect = document.getElementById("connect-btn");
connect.addEventListener("click", async () => {
  try {
    const accounts = await window.ethereum.enable();
    const chainId = await web3.eth.getChainId();

    if (chainId === 280) {
      localStorage.setItem("isConnected", true);

      localStorage.setItem("isConnected", true);
      if (!clicked) {
        connect.textContent = "Connected";
        button.textContent = "Buy";
        const balance = await web3.eth.getBalance(accounts[0]);
        const balanceInBNB = balance / 10 ** 18;
        const roundedBalance = balanceInBNB.toFixed(4);
        document.getElementById("fox").addEventListener("click", addToWallet);
        document.getElementById("fox-bnb").addEventListener("click", addBNB);
        const isWhitelisted = await sttcontract.methods.IsWhitelisted(accounts[0]).call();
        console.log(`Is Whitelisted: ${isWhitelisted}`);

        if (isWhitelisted){
          document.getElementById("whitelist").textContent = "You are Whitelisted"
        }else {
          document.getElementById("whitelist").textContent = "You are not Whitelisted"
        }

        document.getElementById(
          "balance"
        ).textContent = `Balance BNB: ${roundedBalance}`;
        clicked = true;
      }
    } else {
      alert("Please connect to Arbitrum Chain");
    }
  } catch (error) {
    alert("Please install MetaMask");
  }
});


window.addEventListener("load", async () => {
  if (localStorage.getItem("isConnected")) {
    try {
      const accounts = await window.ethereum.enable();
      const chainId = await web3.eth.getChainId();

      if (chainId === 280) {
        connect.textContent = "Connected";
        button.textContent = "Buy";
        const balance = await web3.eth.getBalance(accounts[0]);
        const balanceInBNB = balance / 10 ** 18;
        const roundedBalance = balanceInBNB.toFixed(4);
        document.getElementById("fox").addEventListener("click", addToWallet);
        document.getElementById("fox-bnb").addEventListener("click", addBNB);

        const isWhitelisted = await sttcontract.methods.IsWhitelisted(accounts[0]).call();
        console.log(`Is Whitelisted: ${isWhitelisted}`);

        if (isWhitelisted){
          document.getElementById("whitelist").textContent = "You are Whitelisted"
        }else {
          document.getElementById("whitelist").textContent = "You are not Whitelisted"
        }

        document.getElementById(
          "balance"
        ).textContent = `Balance ETH: ${roundedBalance}`;
        clicked = true;
      } else {
        alert("Please connect to Arbitrum Chain");
      }
    } catch (error) {
      console.log("Please install MetaMask");
    }
  }
});



let accounts;

const connectPresale = document.getElementById("connect-btn-presale");


connectPresale.addEventListener("click", async () => {
  try {
    const accounts = await window.ethereum.enable();
    const chainId = await web3.eth.getChainId();

    if (chainId === 280) {
      localStorage.setItem("isConnected", true);

      localStorage.setItem("isConnected", true);
      if (!clicked) {
        // connectPresale.textContent = "Connected";
        // connect.textContent = "Connected";
        const balance = await web3.eth.getBalance(accounts[0]);
        const balanceInBNB = balance / 10 ** 18;
        const roundedBalance = balanceInBNB.toFixed(4);
        
        console.log(accounts[0])

        document.getElementById(
          "balance"
        ).textContent = `ETH Balance: ${roundedBalance}`;
        clicked = true;

        const isWhitelisted = await sttcontract.methods.IsWhitelisted(accounts[0]).call();
        console.log(`Is Whitelisted: ${isWhitelisted}`);

        if (isWhitelisted){
          document.getElementById("whitelist").textContent = "You are Whitelisted"
        }else {
          document.getElementById("whitelist").textContent = "You are not Whitelisted"
        }

        



      }
    } else {
      customAlert("Please connect to Arbitrum Chain");
    }
  } catch (error) {
    customAlert("Please install MetaMask");
    
  }
});




connect.addEventListener("click", async () => {
  try {
    const accounts = await window.ethereum.enable();
    const chainId = await web3.eth.getChainId();

    if (chainId === 42161) {
      localStorage.setItem("isConnected", true);

      connect.textContent = "Connected";
      connectPresale.textContent = "Connected";
      if (!clicked) {
        // connectPresale.textContent = "Connected";
        // connect.textContent = "Connected";
        const balance = await web3.eth.getBalance(accounts[0]);
        const balanceInBNB = balance / 10 ** 18;
        const roundedBalance = balanceInBNB.toFixed(4);
        
        console.log(accounts[0])

        document.getElementById(
          "balance"
        ).textContent = `ETH Balance: ${roundedBalance}`;
        clicked = true;

        const isWhitelisted = await sttcontract.methods.IsWhitelisted(accounts[0]).call();
        console.log(`Is Whitelisted: ${isWhitelisted}`);

        if (isWhitelisted){
          document.getElementById("whitelist").textContent = "You are Whitelisted"
        }else {
          document.getElementById("whitelist").textContent = "You are not Whitelisted"
        }
      }
    } else {
      customAlert("Please connect to Arbitrum Chain");
    }
  } catch (error) {
    customAlert("Please install MetaMask");
    
  }
});





window.addEventListener("load", async () => {
  if (localStorage.getItem("isConnected")) {
    try {
      const accounts = await window.ethereum.enable();
      const chainId = await web3.eth.getChainId();

      if (chainId === 280) {
        connect.textContent = "Connected";
        connectPresale.textContent = "Connected";
        button.textContent = "Buy";
        const balance = await web3.eth.getBalance(accounts[0]);
        const balanceInBNB = balance / 10 ** 18;
        const roundedBalance = balanceInBNB.toFixed(4);
        const isWhitelisted = await sttcontract.methods.IsWhitelisted(accounts[0]).call();
        console.log(`Is Whitelisted: ${isWhitelisted}`);

        if (isWhitelisted){
          document.getElementById("whitelist").textContent = "You are Whitelisted"
        }else {
          document.getElementById("whitelist").textContent = "You are not Whitelisted"
        }

        document.getElementById(
          "balance"
        ).textContent = `Balance ETH: ${roundedBalance}`;
        clicked = true;
      } else {
        customAlert("Please connect to Arbitrum Chain");
      }
    } catch (error) {
      console.log("Please install MetaMask");
    }
  }
});



/* BUY BUTTON */

button.addEventListener("click", async () => {
  try {
    const accounts = await window.ethereum.enable();
    const chainId = await web3.eth.getChainId();

    if (chainId === 280) {
      if (!clicked) {
        button.textContent = "Buy";
        const balance = await web3.eth.getBalance(accounts[0]);
        const balanceInBNB = balance / 10 ** 18;
        const roundedBalance = balanceInBNB.toFixed(4);
        const isWhitelisted = await sttcontract.methods.IsWhitelisted(accounts[0]).call();
        console.log(`Is Whitelisted: ${isWhitelisted}`);

        if (isWhitelisted){
          document.getElementById("whitelist").textContent = "You are Whitelisted"
        }else {
          document.getElementById("whitelist").textContent = "You are not Whitelisted"
        }
        document.getElementById(
          "balance"
        ).textContent = `Balance ETH: ${roundedBalance}`;
        clicked = true;
      } else {
        buystt();
      }
    } else {
      customAlert("Please connect to Arbitrum Chain");
    }
  } catch (error) {
    customAlert("Please install MetaMask");
  }
});



/* VISIBILITY */

