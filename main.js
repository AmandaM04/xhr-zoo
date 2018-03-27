const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
  };
  
  const buildDomString = (animalArray) => {
    console.log("animalArray", animalArray);
    let domString = "";
    animalArray.forEach((animal) => {
      domString += `<h1>${animalArray[i].name}</h1>`;
    })
    printToDom(domString, 'animal-holder')
  };
  
  function executeThisCodeAfterFileLoaded (){
    console.log("executeThisCodeAfterFileLoaded", executeThisCodeAfterFileLoaded);
    console.log("this", this);
    console.log("this.responseText", this.responseText);
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    domString(data.animals);
  }
function executeThisCodeIfXHRFails(){
    console.log("something went wrong");
  }

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "animals.json");
    myRequest.send();
    console.log("myrequest", myRequest);
  };
  
  startApplication();
  