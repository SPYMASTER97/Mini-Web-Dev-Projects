const main = document.getElementById('main');
const adduserbtn = document.getElementById('add-user');
const doublebtn = document.getElementById('double');
const showmillionairesbtn = document.getElementById('show-millionaires');
const sortbtn = document.getElementById('sort');
const calculatewealthbtn = document.getElementById('calculate-wealth');

let data = [];

getrandomuser();
getrandomuser();
getrandomuser();

//fetch random user and add their money

async function getrandomuser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newuser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    adddata(newuser);
}

//double the money
function doublemoney() {
    data = data.map(user => {
        return {...user, money: user.money * 2 }
    });

    updateDOM();

}

//sorts user by richest
function sortbyrichest() {
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}

//filter the millionaires
function filtermillionaires() {
    data = data.filter(user => user.money > 1000000);
    updateDOM();
}

//finds the total wealth
function total() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);

    const wealthel = document.createElement('div');
    wealthel.innerHTML = `<h3>Total Wealth: <strong>${formatmoney(wealth)}</strong></h3>`;
    main.appendChild(wealthel);
}

//add new object to data array
function adddata(obj) {
    data.push(obj);

    updateDOM();
}

//update DOM
function updateDOM(provideddata = data) {
    //clear main div
    main.innerHTML = '<h2><strong>Person</strong><span>Wealth</span></h2>';

    provideddata.forEach(person => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${person.name}</strong>${formatmoney(person.money)}`;
        main.appendChild(element);
    });
}

//format number as money
function formatmoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//event listeners
adduserbtn.addEventListener('click', getrandomuser);
doublebtn.addEventListener('click', doublemoney);
sortbtn.addEventListener('click', sortbyrichest);
showmillionairesbtn.addEventListener('click', filtermillionaires);
calculatewealthbtn.addEventListener('click', total);