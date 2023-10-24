let accBalance = document.querySelector(".balance");





// CHANGING BALANCE TO CURRENCY FORMAT
let balance = Math.floor(accBalance.innerHTML);

function formatter() {
    let newBalance = balance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'NGN',
    });

    return accBalance.innerHTML= newBalance;
}

formatter();