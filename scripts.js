var player, winner = null;
var playerSelected = document.getElementById('jogador-selecionado');
var winnerSelected = document.getElementById('vencedor-selecionado');
var squares = document.getElementsByClassName('quadrado');

changePlayer('X');

function chooseSquare(id) {
    if (winner !== null) {
        return;
    }

    var square = document.getElementById(id);
    if (square.innerHTML !== '=') {
        return;
    }
    square.innerHTML = player;
    square.style.color = '#000';

    if(player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    changePlayer(player);
    checkWinner();
}

function changePlayer(value) {
    player = value;
    playerSelected.innerHTML = player;
}

function checkWinner() {
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);

    if (checkSequence(square1, square2, square3)) { /* Horizontal => Top-left */
        changeColorSquare(square1, square2, square3);
        changeWinner(square1);
        return;
    }

    if (checkSequence(square4, square5, square6)) { /* Horizontal => Mid-left */
        changeColorSquare(square4, square5, square6);
        changeWinner(square4);
        return;
    }

    if (checkSequence(square7, square8, square9)) { /* Horizontal => Bot-left */
        changeColorSquare(square7, square8, square9);
        changeWinner(square7);
        return;
    }

    if (checkSequence(square1, square4, square7)) { /* Vertical => Top-left */
        changeColorSquare(square1, square4, square7);
        changeWinner(square1);
        return;
    }

    if (checkSequence(square2, square5, square8)) { /* Vertical => Top-mid */
        changeColorSquare(square2, square5, square8);
        changeWinner(square2);
        return;
    }

    if (checkSequence(square3, square6, square9)) { /* Vertical => Top-right */
        changeColorSquare(square3, square6, square9);
        changeWinner(square3);
        return;
    }

    if (checkSequence(square1, square5, square9)) { /* Diagonal => Top-left */
        changeColorSquare(square1, square5, square9);
        changeWinner(square1);
        return;
    }

    if (checkSequence(square3, square5, square7)) { /* Diagonal => Top-right */
        changeColorSquare(square3, square5, square7);
        changeWinner(square3);
        return;
    }

}

function changeWinner(square) {
    winner = square.innerHTML;
    winnerSelected.innerHTML = winner;
}

function changeColorSquare(square1, square2, square3) {
    square1.style.background = '#07880e';
    square2.style.background = '#07880e';
    square3.style.background = '#07880e';
}

function checkSequence(square1, square2, square3) {
    var isEqual = false;

    if ( square1.innerHTML !== '=' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        isEqual = true
    }

    return isEqual;
}

function reboot() {
    winner = null;
    winnerSelected.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = '#bebebe';
        square.style.color = '#bebebe';
        square.innerHTML = '='
    }

    changePlayer('X');
}