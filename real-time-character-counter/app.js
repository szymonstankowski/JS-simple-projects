const totalCharactersEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

const textAreaEl = document.getElementById("textarea");

updateCounter();
function updateCounter(){
    totalCharactersEl.innerText = textAreaEl.value.length;
    remainingCounterEl.innerText = textAreaEl
    .getAttribute("maxlength") - textAreaEl.value.length;
}


textAreaEl.addEventListener("keyup", ()=>{
    updateCounter();
})




