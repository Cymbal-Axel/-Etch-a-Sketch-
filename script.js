var createDiv = function(){
const insideContainer = document.querySelector(".container");
const newDiv = document.createElement("div");
newDiv.textContent = "c";
insideContainer.appendChild(newDiv);
};
console.log(createDiv())


function createMultipleDivs(n){
    for(let i = 1; i < n; i++){
        createDiv();
    };
};
createMultipleDivs(256);