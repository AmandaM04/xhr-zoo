const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
  };
  
  const buildDomString = (animalArray) => {
    // console.log("animalArray", animalArray);
    let domString = "";
    animalArray.forEach((animal) => {
        if(animal["is Carnivore"]){
            domString +=  `<div class="animal carnivore">`;   
        } else {
            domString +=  `<div class="animal vegetable">`;
        }
      domString +=  `<h1>${animal.name}</h1>`;
      domString +=  `<h3>${animal.number}</h3>`;
      domString +=  `<img class="animal-image" src="${animal.imageURL}" alt="">`;
      domString +=  `<div class="button-container">`;
      domString +=      `<button class="escaped">Escaped</button>`;
      domString +=  `</div>`;
      domString += `</div>`;
    })
    
    printToDom(domString, 'animal-holder')
  };
  

  const addEscapedEventListeners = () => {
    const escapedButtons = document.getElementsByClassName('escaped')
    
    for(let i=0; i<escapedButtons.length; i++) {
        escapedButtons[i].addEventListener('click', animalEscaped)
    }
    //   animalEscaped();
  };
  const animalEscaped = () => {
      showCarnivores();
      showVegetables();
  }
  const showCarnivores = () => {
    const carnivores = document.getElementsByClassName('carnivore');
    for(let j=0; j<carnivores.length; j++) {
        carnivores[j].children[3].innerHTML = '';
        carnivores[j].classList.add('red');
    }
};
const showVegetables = () => {
    const vegetables = document.getElementsByClassName('vegetable');
    for(let j=0; j<vegetables.length; j++) {
        vegetables[j].children[3].innerHTML = '<button>EAT ME!!!!!</button>';
        vegetables[j].classList.add('green');
    }
};  


function executeThisCodeIfXHRFails(){
    console.log("something went wrong");
  }

  function executeThisCodeAfterFileLoaded (){
    // console.log("executeThisCodeAfterFileLoaded", executeThisCodeAfterFileLoaded);
//     console.log("this", this);
//     console.log("this.responseText", this.responseText);
    const data = JSON.parse(this.responseText);
//     console.log("data", data);
    buildDomString(data.animals);
    addEscapedEventListeners();
  }

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "animals.json");
    myRequest.send();
    // console.log("myrequest", myRequest);
  };
  
  startApplication();
  