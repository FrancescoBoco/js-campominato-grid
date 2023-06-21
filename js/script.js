/*

    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora
    di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/
const clickMe = document.getElementById('click-me')


const gridContainer = document.querySelector('.grid-container');

clickMe.addEventListener('click',
    function(){
        
    const gridContainer = document.querySelector('.grid-container');

    for (let number = 1 ; number <= 100; number++) {

    const newCell = document.createElement('div');
    
    newCell.classList.add('cell');
    newCell.append(number);
    newCell.addEventListener('click', function () {
        this.classList.toggle('active');
        console.log(this.innerHTML);
        

    });

    gridContainer.append(newCell);
}
        

    })




