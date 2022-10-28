const containerEl = document.querySelector(".container"); // pobieranie elementu div kalsy container

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div"); // tworzenie <div>
  colorContainerEl.classList.add("color-container"); // dodawanie do stworzonego <div> klasy color-container
  containerEl.appendChild(colorContainerEl); // dodawanie do pobranego elementu klasy container 30tu <div> klasu color container
}

const colorContainers = document.querySelectorAll(".color-container") // pobieranie wszystkich(30tu) elementow <div> klasy color-container 

function generateColors(){
    colorContainers.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#"+newColorCode;
        
        colorContainerEl.innerText = "#"+newColorCode;
    })
}

generateColors();

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randNum = Math.floor(Math.random()*chars.length)
        colorCode += chars.substring(randNum, randNum+1);   
        console.log(colorCode);  
    }
    return colorCode;        
}
