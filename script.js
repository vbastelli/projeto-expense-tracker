const button = document.getElementById('button');
const totalText = document.getElementById('total');
const buttonIncome = document.getElementById('income-button');
const income = document.getElementById('income');
const leftOver = document.getElementById('leftover');
let total = 0;
let incomeTotal = 0;
first = false;
second = true;


button.addEventListener('click', function (){
    const date = document.getElementById('date');
    const method = document.getElementById('method');
    const paidTo = document.getElementById('paid-to');
    const description = document.getElementById('description');
    const amount = document.getElementById('amount');
    
    
    const formData = {
        date: date.value,
        method: method.value,
        paidTo: paidTo.value,
        description: description.value,
        amount: parseFloat(amount.value)
      };
      
      date.value = '';
      method.value = '';
      paidTo.value = '';
      description.value = '';
      amount.value = '';

      addRow(formData);

    total += formData.amount;
    totalText.innerHTML = `TOTAL TO DATE: $${total.toFixed(2)}`; 

    first = true;

    if (first && second){
        calculateMoney(incomeTotal, total);
    }
})

buttonIncome.addEventListener('click', function(){
    incomeTotal = parseFloat(income.value)
    console.log(incomeTotal);
    income.value = '';
    second = true;

    if (first && second){
        calculateMoney(incomeTotal, total);
    }
})

function calculateMoney(income, spent){
    parseFloat(income);
    parseFloat(spent);
    let left = income - spent;
    leftOver.innerHTML = `<h3>MONEY LEFT OVER: $${income} - $${spent} = $${left}</h3>`
}

function addRow(data){
    const tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];

    const newRow = tableBody.insertRow();

    const dateCell = newRow.insertCell(0);
    dateCell.textContent = data.date;


    const methodCell = newRow.insertCell(1);
    methodCell.textContent = data.method;


    const paidToCell = newRow.insertCell(2);
    paidToCell.textContent = data.paidTo;


    const descriptionCell = newRow.insertCell(3);
    descriptionCell.textContent = data.description;


    const amountCell = newRow.insertCell(4);
    amountCell.textContent = `$${data.amount}`;

}