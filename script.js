var createDiv = function () {
    const insideContainer = document.querySelector(".container");
    const newDiv = document.createElement("div");
    newDiv.addEventListener("mouseover", colorChange);
    newDiv.classList.add("divs");
    insideContainer.appendChild(newDiv);
};
console.log(createDiv())

function colorChange(event) {
    event.target.style.backgroundColor = "#00FF00";
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    event.target.style.backgroundColor = color;

}

function boton() {
    var boton = document.getElementById("boton");
    boton.addEventListener("click", resetBoton);
}
boton()

function resetBoton(){
    var clearDivs = document.querySelectorAll(".divs");
    for (let i = 0 ; i < clearDivs.length; i++){
        clearDivs[i].style.backgroundColor = "#ecf0f1";   
    }
}

function promPT(clientPrompt){
    var clientPrompt = prompt('Ingrese un numero entre 0 y 100');
    if (clientPrompt > 100 || clientPrompt <= 0){
        alert('Error, el numero debe ser entre 0 y 100');
    }else {return createMultipleDivs(clientPrompt)}
}

function createMultipleDivs(n) {
    for (let i = 1; i < n; i++) {
        createDiv();
    };
};
createMultipleDivs(promPT());

//necesito que el id sea unico (pasarle el numero de iteracion).