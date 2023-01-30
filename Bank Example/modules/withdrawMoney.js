console.log("withdraw money");

function withdrawMoney (){
    const withdraw_btn = document.getElementById("withdraw-btn");
    withdraw_btn.addEventListener("click", function () {
      const withdrawNumb = getInputNumb("withdraw-amount");
    
      updateSpanTest("current-withdraw", withdrawNumb);
      updateSpanTest("current-balance", -1 * withdrawNumb);
      
      document.getElementById("withdraw-amount").value = "";
    });
}

export default withdrawMoney;