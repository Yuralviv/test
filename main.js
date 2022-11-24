// Створити div
const div = document.createElement('div');
// Додати до нього клас wrapper
div.classList.add('wrapper');
// Помістити його в середину тега body
const body = document.body;
body.appendChild(div);
// Створити заголовок H1 "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = 'DOM (Document Object Model)';

// Додати H1 перед DIV із класом wrapper
div.insertAdjacentElement('beforebegin', header)
// Створити список <ul></ul>
// Додати до нього 3 елементи з текстом "один, два, три"

const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;

// Розмістити список всередину елемента з класом wrapper
div.innerHTML = ul;
// ================================================ =
// Створити зображення
const img = document.createElement('img');
// Додати такі властивості до зображення
// 1. Додати атрибут source
img.src = 'https://picsum.photos/240';
// 2. Додати атрибут width зі значенням 240
img.width = 240;
// 3. Додати клас super
img.classList.add('super');
// 4. Додати властивість alt зі значенням "Super Man"
img.alt = 'Super Man';
// Розмістити зображення всередину елемента з класом wrapper
div.appendChild(img)
// Використовуючи HTML рядок, створити DIV з класом 'pDiv' + з двома параграфами
const elemHTML = `
<div class='pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>`
// Розмістити цей DIV до елемента <ul></ul>
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML)
// Додати до 2-го параграфа клас text
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
// Видалити 1-й параграф
pDiv.firstElementChild.remove();

// Створити функцію generateAutoCard,
// яка приймає 3 аргументи: brand, color, year
const generateAutoCard = (brand, color, year) => {
    const curDate = New Date();
    const curYear = curDate.getFullYear();
    return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобіль ${brand.toUpperCase()} - ${year} року. Вік авто - ${curYear - year} років.</p>
            <p>Колір: ${color}</p>
            <button type='button' class='btn'>Видалити</button>
        </div>
    `;
}
// Функція повинна повертати розмітку HTML:
// <div class="autoCard">
// <h2>BRAND YEAR</h2>
// Автомобіль BRAND - YEAR року. Вік авто - YEARS років.</p>
//</div>

// Створити новий DIV із класом autos
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

// Створити 3 картки авто, використовуючи функцію generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Червоний'},
    {brand: 'Lexus', year: 2016, color: 'Сріблястий'},
    {brand: 'Nissan', year: 2012, color: 'Чорний'},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');

// Розмістити ці 3 картки всередину DIV з класом autos
carsDiv.innerHTML = carsHTML;
// Розмістити DIV c класом autos на сторінку DOM - до DIV з класом wrapper
div.insertAdjacentElement('beforebegin', carsDiv);
// Додати кнопку Видалити на кожну картку авто

// При натисканні на кнопку - видаляти картку зі структури DOM
// 1. Вибрати всі кнопки
const buttons = document.querySelectorAll('.btn');

//2. Створити функцію видалення
function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();
    // console.log(currentButton.parentElement)
}
// 3. Використовувати цикл – щоб повісити обробник події на кожну кнопку
buttons.forEach(button => {
    button.addEventListener('click', handleClick)