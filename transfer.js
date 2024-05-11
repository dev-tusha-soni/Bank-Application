const currentAmountElement = document.querySelector('.current-balance');
const transactionInput = document.getElementById('transaction-amount');
const withdrawalInput = document.getElementById('Withdrawal amount');
const loanInput = document.getElementById('Loan amount');
const transactionButton = document.querySelector('.trans-cards:nth-of-type(1) button');
const withdrawalButton = document.querySelector('.trans-cards:nth-of-type(2) button');
const loanButton = document.querySelector('.trans-cards:nth-of-type(3) button');
const Error = document.getElementById('error')
const tranferAMT = document.getElementById('tranfer-amt')


// document.addEventListener('DOMContentLoaded', function(){

// })


const Printcurrentdate = (document.getElementById('currentdate'));
function currentdate() {
    const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentdate = new Date();
    var date = currentdate.getDate();
    var month = m[currentdate.getMonth()];
    var year = currentdate.getFullYear();
    var formattedDate = month + ' ' + date + ', ' + year;
    // Printcurrentdate.innerText = formattedDate;

    // console.log(Printcurrentdate)
    
    return formattedDate;
}




function updatecurrentAmount(amount) {
    currentAmountElement.innerHTML = amount;
    transactionInput.value = null;

}


transactionButton.addEventListener('click', function () {
    const transactionAmount = parseFloat(transactionInput.value);
    const updatedAmount = parseFloat(currentAmountElement.innerHTML) - transactionAmount;
    updatecurrentAmount(updatedAmount);
    tranferAMT.innerText = transactionAmount

    function createElements(){

        
        const containerSection = document.createElement('div');
        containerSection.classList.add('container')        

        const historySection = document.createElement('div');
        historySection.classList.add('hist-card')


        const historyTitle = document.createElement('h1')
        historyTitle.textContent = "Transaction History";

        const transDiv = document.createElement("div");
        transDiv.classList.add('heading');
        transDiv.style.height= "72px"
    
        const transSection = document.createElement("div")
        transSection.classList.add('trans')
        transDiv.appendChild(transSection)

        const transTitle = document.createElement("h2")
        transTitle.textContent= "Transfered:";
        transTitle.style.marginBottom= "12px"
        transSection.appendChild(transTitle)
    
        const transAmount = document.createElement("div")
        transAmount.style.display="flex";

        transAmount.textContent = "Rs."
        const showAmount = document.createElement("p")
        showAmount.classList.add('tranfer-amt')
        showAmount.textContent = transactionAmount;
        transAmount.appendChild(showAmount)
        transSection.appendChild(transAmount)

        const showDate = document.createElement('div')
        showDate.classList.add('trans-date')
        const dateSection = document.createElement('p')
        dateSection.setAttribute("id", "currentdate")
        showDate.appendChild(dateSection)
        dateSection.textContent = currentdate();
        transDiv.appendChild(showDate)

        containerSection.appendChild(historySection)
        historySection.appendChild(transDiv);
        document.body.appendChild(containerSection)
    }

    createElements()
});

withdrawalButton.addEventListener('click', function () {
    const withdrawalAmount = parseInt(withdrawalInput.value);
    if (!isNaN(withdrawalAmount)) {
        updatecurrentAmount(parseFloat(currentAmountElement.innerHTML) - withdrawalAmount);
    }
});

loanButton.addEventListener('click', function () {
    const loanAmount = parseInt(loanInput.value);
    const apploan = parseFloat(currentAmountElement.innerHTML) / 10
    if (loanAmount < apploan) {
        if (!isNaN(loanAmount)) {
            updatecurrentAmount(parseFloat(currentAmountElement.innerHTML) + loanAmount);
        }
    }
    else {
        Error.style.display = "block";
    }


});
