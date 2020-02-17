let ball = document.querySelector("#ball");
let hole = document.querySelector(".hole");

let posX = 0;
let posY = 0;

let speedX;
let speedY;

function speed(e) {
    speedX=e.gamma/1000
    speedY=e.beta/1000
}
function movability() {
    if(posX + speedX < window.innerWidth-25 && posX + speedX > 0) {
        posX+=speedX;
        ball.style.left=posX+'px';        
    }

    if(posY + speedY < window.innerHeight-50 && posY + speedY > 0){
        posY+=speedY;
        ball.style.top=posY+'px';
    }

    if(posY>hole.offsetTop-40 && posY<hole.offsetTop+30){
        if(posX>hole.offsetLeft-60 && posX<hole.offsetLeft+20){
            posX = 20
            posY = 20
            speedY = 0
            speedX = 0
            alert('You win! Your time: ')
            time = 1
        }
     }
        window.requestAnimationFrame(movability)
}
window.addEventListener('deviceorientation', movability)
window.addEventListener('deviceorientation', speed)