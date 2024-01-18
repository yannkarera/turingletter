let random = Math.floor(Math.random() * (100)) +1;
console.log(random);

let button = document.getElementById('action');


button.addEventListener('click' , () => { 
    let control = document.getElementById('keyboard');
    let guess = control.value;

    let monitor = document.getElementById('display');

    if(guess == ''){
        monitor.innerText = "Entree vide, recommencez";
    }
    else if( guess < random ){
        monitor.innerText = "nombre trop bas";
    } 
    else if( guess > random ){
        monitor.innerText = "nombre trop haut";
    } 
    else if( guess == random ){
        monitor.innerText = "BRAVO!";
    } 
    else{
        monitor.innerText = "ERROR";
    }

}
)

document.getElementById('refreshbutton').addEventListener('click' , () => location.reload ());