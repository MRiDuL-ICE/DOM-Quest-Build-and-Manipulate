document.getElementById('noakhali-donate').addEventListener('click', function (event) {
    event.preventDefault()

    console.log("donate noakhali");
    const addAmount = document.getElementById('noakhali-amount').value;
    const addAmountNumber = parseFloat(addAmount);
    const balance = document.getElementById('noakhali-total').innerText;
    const balanceNumber = parseFloat(balance);
    const balanceAmount = document.getElementById('balance').innerText;
    const balanceAmountNumber = parseFloat(balanceAmount)

    if(!isNaN(addAmountNumber)){
        if (addAmountNumber < balanceAmountNumber && balanceAmountNumber > 0 && addAmountNumber>0) {


            const newTotal = balanceNumber + addAmountNumber;
            const newBalance = balanceAmountNumber - addAmountNumber;
        
            document.getElementById('noakhali-total').innerText = newTotal;
            document.getElementById('balance').innerText = newBalance;
            
            document.getElementById('my_modal_2').showModal();
        
            //history
            const div = document.createElement('div')
            const uniqueId = `datetime-${Date.now()}`;
            div.innerHTML = `
            <div class="w-4/6 border-2 mx-auto rounded-lg p-10">
        
            <h1 class="text-2xl font-bold">${addAmountNumber} Taka Donated for Flood at Noakhali, Bangladesh</h1>
            <p id="${uniqueId}" class="text-[#111111B3] pt-5"></p>
            <script>
            
            </script>
        
        </div>
        
            `
                
                document.getElementById('history-section').appendChild(div)
        
                const now = new Date();
                const datetime = now.toString();
                document.getElementById(uniqueId).innerHTML = `Date: ${datetime}`;
        
            }
            else {
                alert("Insufficient balance or donation amount")
                return;
            }
    }
    else{
        alert('Please enter valid amount')
    }
})
document.getElementById('feni-donate').addEventListener('click', function (event) {
    event.preventDefault()

    console.log("donate feni");
    const addAmount = document.getElementById('feni-amount').value;
    const addAmountNumber = parseFloat(addAmount);
    const balance = document.getElementById('feni-total').innerText;
    const balanceNumber = parseFloat(balance);
    const balanceAmount = document.getElementById('balance').innerText;
    const balanceAmountNumber = parseFloat(balanceAmount)

    if(!isNaN(addAmountNumber)){
        if (addAmountNumber < balanceAmountNumber && balanceAmountNumber > 0 && addAmountNumber>0) {


            const newTotal = balanceNumber + addAmountNumber;
            const newBalance = balanceAmountNumber - addAmountNumber;
        
            document.getElementById('feni-total').innerText = newTotal;
            document.getElementById('balance').innerText = newBalance;
            
            document.getElementById('my_modal_2').showModal();
        
        
            //history
            const div = document.createElement('div')
            const uniqueId = `datetime-${Date.now()}`;
            div.innerHTML = `
            <div class="w-4/6 my-5 border-2 mx-auto rounded-lg p-10">
        
            <h1 class="text-2xl font-bold">${addAmountNumber} Taka Donated for Flood Relief at Feni, Bangladesh</h1>
            <p id="${uniqueId}" class="text-[#111111B3] pt-5"></p>
            <script>
            
            </script>
        
        </div>
        
            `
                
                document.getElementById('history-section').appendChild(div)
        
                const now = new Date();
                const datetime = now.toString();
                document.getElementById(uniqueId).innerHTML = `Date: ${datetime}`;
            }
            else {
                alert("Insufficient balance or donation amount")
                return;
            }
    }
    else{
        alert('Enter a valid amount')
    }
})
document.getElementById('quota-donate').addEventListener('click', function (event) {
    event.preventDefault()

    console.log("donate to quota");
    const addAmount = document.getElementById('quota-amount').value;
    const addAmountNumber = parseFloat(addAmount);
    const balance = document.getElementById('quota-total').innerText;
    const balanceNumber = parseFloat(balance);
    const balanceAmount = document.getElementById('balance').innerText;
    const balanceAmountNumber = parseFloat(balanceAmount)

    if(!isNaN(addAmountNumber)){
        if (addAmountNumber < balanceAmountNumber && balanceAmountNumber > 0 && addAmountNumber>0) {


            const newTotal = balanceNumber + addAmountNumber;
            const newBalance = balanceAmountNumber - addAmountNumber;
        
            document.getElementById('quota-total').innerText = newTotal;
            document.getElementById('balance').innerText = newBalance;
            
            document.getElementById('my_modal_2').showModal();
        
        
            //history
            const div = document.createElement('div')
            const uniqueId = `datetime-${Date.now()}`;
            div.innerHTML = `
            <div class="w-4/6 border-2 mx-auto rounded-lg p-10">
        
            <h1 class="text-2xl font-bold">${addAmountNumber} Taka Donated for Injured in the Quota Movement, Bangladesh</h1>
            <p id="${uniqueId}" class="text-[#111111B3] pt-5"></p>
            <script>
            
            </script>
        
        </div>
        
            `
                
                document.getElementById('history-section').appendChild(div)
        
                const now = new Date();
                const datetime = now.toString();
                document.getElementById(uniqueId).innerHTML = `Date: ${datetime}`;
            }
            else {
                alert("Insufficient balance or donation amount")
                return;
            }
    }
    else{
        alert('Enter a valid amount')
        return;
    }
})