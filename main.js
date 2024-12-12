const elBody = document.body;
const elScreen = document.querySelector('.screen');
const elForm = document.querySelector('.form');
const elInput = document.querySelector('.input');
const computerNumber = Math.floor(Math.random() * 100) + 1;
const classes = ['wrong', 'smaller', 'bigger', 'correct'];

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const userNumber = +elInput.value;
    elBody.classList.remove(...classes);

    if (userNumber < 1 || userNumber > 100) {
        elBody.classList.add('wrong');
        elScreen.textContent = '❗ 1 dan 100 gacha oralig\'idagi sonni kiriting! ❗';
    } else if (userNumber > computerNumber) {
        elBody.classList.add('smaller');
        elScreen.textContent = 'Kichikroq son kiriting 🤏';
    } else if (userNumber < computerNumber) {
        elBody.classList.add('bigger');
        elScreen.textContent = 'Katta son kiriting ➕';
    } else {
        elBody.classList.add('correct');
        elScreen.textContent = 'Topdingiz! uree 🎉';
    }

    elInput.value = '';
});

[5, 16, 20, 7, 90, 3].filter(num => num % 5 === 0).forEach(console.log);