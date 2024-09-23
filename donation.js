document.getElementById('noakhali-donate').addEventListener('click', function (event) {
    event.preventDefault()

    console.log("donate noakhali");
    const addAmount = document.getElementById('noakhali-amount').value;
    const addAmountNumber = parseFloat(addAmount);
    const noakhaliBalance = document.getElementById('noakhali-total').innerText;
    const noakhaliBalanceNumber = parseFloat(noakhaliBalance);
    const balanceAmount = document.getElementById('balance').innerText;
    const balanceAmountNumber = parseFloat(balanceAmount)

    if (addAmountNumber < balanceAmountNumber && balanceAmountNumber > 0 && addAmountNumber>0) {


    const newTotal = noakhaliBalanceNumber + addAmountNumber;
    const newBalance = balanceAmountNumber - addAmountNumber;

    document.getElementById('noakhali-total').innerText = newTotal;
    document.getElementById('balance').innerText = newBalance;
    
    document.getElementById('my_modal_2').showModal();
    }
    else {
        alert("Insufficient balance or donation amount")
        return;
    }
})