// create first div by JS
const divElement = document.createElement("div");

//add class for our div
divElement.classList.add("wrapper");

// add our div into body
const body = document.body;
body.appendChild(divElement);

// create h1
// add some text
const header = document.createElement("h1");
header.textContent = "DOM (Document Object Model)";

divElement.appendChild(header);

divElement.insertAdjacentElement("beforebegin", header);

// 'beforebegin': перед самим элементом targetElement.
// 'afterbegin': внутри элемента targetElement, перед его первым потомком.
// 'beforeend': внутри элемента targetElement, после его последнего потомка.
// 'afterend': после самого элемента targetElement.

// console.log(header);

// Створити список <ul></ul>
// Додати до нього 3 елементи з текстом "один, два, три"

// ``

const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;

divElement.innerHTML = ul;

// const img = document.createElement("img");

// img.src = "https://picsum.photos/240";

// img.alt = "image";

// img.width = 400;
// img.height = 400;

// img.classList.add("image");

// divElement.appendChild(img);


// Використовуючи HTML рядок, створити DIV з класом 'pDiv' + з двома параграфами
// Розмістити цей DIV до елемента <ul></ul>
// Додати до 2-го параграфа клас text

const elemHTML = `
<div class='pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>`

const ulList = divElement.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML);

console.log(elemHTML);

// Додати до 2-го параграфа клас text

const pDivConteiner = document.querySelector(".pDiv");

pDivConteiner.children[1].classList.add('text');

const child = pDiv.children[1];
child.classList.add("text");

// pDiv.children[1]
console.log(pDiv.children[1]);