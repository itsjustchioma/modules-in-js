console.log("deposit money");

function depositMoney(){
    const deposit_btn = document.getElementById('deposit-btn');
    deposit_btn.addEventListener("click", function () {
      const depositStringToInt = getInputNumb("deposit-amount");
    
      updateSpanTest("current-deposit", depositStringToInt);
      updateSpanTest("current-balance", depositStringToInt);
    
      //setting up the input field blank when clicked
      document.getElementById("deposit-amount").value = "";
    });
}


export default depositMoney;
