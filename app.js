/* 
* Title: Bank Web applications
* Description: Bank Web Application Developing Raw JavaScrip 
Functional Programing
* Author: Rafe Uddaraj (Rafe JS)
* Data: 9/10/2021
*/
// Selection Part
const hero = document.getElementById('hero');

const loginForm = document.getElementById('login-form');

const bankArea = document.getElementById('bank-section-area');

bankArea.style.display = 'none';

const userName = document.getElementById('user-name');

const deposit = document.getElementById('deposit');

const withdraw = document.getElementById('withdraw');

const balance = document.getElementById('balance');

const depositAmount = document.getElementById('deposit-amount');

const depositAdd = document.getElementById('deposit-add');

const withdrawAmount = document.getElementById('withdraw-amount');

const withdrawAdd = document.getElementById('withdraw-add');


// function

const login = function (event) {
    event.preventDefault();
    const names = this.name;
    const email = this.email;
    const password = this.password;
    if (names.value && email.value && password.value) {
        hero.style.display = 'none';
        bankArea.style.display = 'block';
        message(names.value, userName);
    } else {
        alert('Please Provide Every Details');
    }
};

const message = function (text, show) {
    const date = new Date();
    let hour = date.getHours();
    if (hour >= 6 && hour < 12) {
        const result = 'Good Morning ' + text;
        show.textContent = result;
    }
    else if (hour >= 12 && hour <= 17) {
        const result = 'Good Night ' + text;
        show.textContent = result;
    }
    else {
        const result = 'Good Night ' + text;
        show.textContent = result;
    }

};

const calculation = function (recentN, currentN, totalBalance, totalMoney, calculate) {
    if (recentN.value === '') {
        recentN = 00;
    } else {
        const money = parseFloat(recentN.value);
        const currentMoney = parseFloat(currentN.textContent);
        totalMoney(money, parseFloat(totalBalance.innerHTML));
        recentN.value = '';
        calculate(money, currentMoney);
    }
};


const depositCalculate = function () {
    calculation(depositAmount, deposit, balance, depositTotalCalculate, totalCalculate);
};

const depositTotalCalculate = function (recent, totalBalance) {
    balance.innerText = recent + totalBalance;
};

const totalCalculate = function (current, prev) {
    const totalMoney = current + prev;
    deposit.innerHTML = totalMoney < 9 ? `0${totalMoney}` : totalMoney;
};


const withdrawCalculate = function () {
    calculation(withdrawAmount, withdraw, balance, totalWithdraw, totalWithdrawCalculate);
};


const totalWithdraw = function (recent, totalBalance) {
    balance.innerText = totalBalance - recent;
};

const totalWithdrawCalculate = function (money, current) {
    withdraw.innerText = current + money;
};

// invoke Function

loginForm.addEventListener('submit', login);
depositAdd.addEventListener('click', depositCalculate);
withdrawAdd.addEventListener('click', withdrawCalculate);