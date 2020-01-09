let board = []

function play(clickedId){
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId)
    if(playerSpan.innerText === "X"){
        playerSpan.innerText = "O"
        clickedElement.innerText = "X"
    } else {
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
    }
}