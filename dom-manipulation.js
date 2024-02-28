function changeText() {
    const element = document.getElementById('changeMe');
    element.textContent = "you changed the text!";
}
function toggleVisibility() {
    const hiddenElement = document.getElementById("hiddenElement");
    hiddenElement.classList.toggle("hidden");
}
let numberOfItems = 3;
function addItem() {
    const list = document.getElementById("myList");
const newItem = document.createElement("li");
const input = document.createElement("input");
const checkbox2 = document.createElement("input");
checkbox2.type = 'checkbox';
numberOfItems++
newItem.textContent =`Item ${numberOfItems}`;
list.append(newItem, input, checkbox2);
}
    

