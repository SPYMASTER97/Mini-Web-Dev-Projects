const container = document.querySelector('.container');

const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

populateUI();


let ticketprice = +movieselect.value;

//saveselectedmovieindex and price
function setmoviedata(movieIndex, moviePrice) {
    localStorage.setItem('selectedmovieindex', movieindex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//seat update count
function updateSelectedCount() {
    const selectedseats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedseats].map(function(seat) {
        return [...seats].indexOf(seat);
    });

    localStorage.setItem('selectedseats', JSON.stringify(seatsIndex));



    const selectedSeatsCount = selectedseats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketprice;
}

//get data from local storage and populate ui
function populateUI() {
    const selectedseats = JSON.parse(localStorage.getItem('selectedseats'));

    if (selectedseats !== null && selectedseats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedseats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    selectedmovieindex = localStorage.getItem('selectedmovieindex');
    if (selectedmovieindex !== null) {
        movieselect.selectedIndex = selectedmovieindex;
    }

}

//movie select
movieselect.addEventListener('change', function(e) {

    ticketprice = +e.target.value;
    setmoviedata(e.target.selectedIndex, e.target.value);
    updateSelectedCount();

});



container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

        e.target.classList.toggle('selected');

        updateSelectedCount();

    }
});

//update count
updateSelectedCount();