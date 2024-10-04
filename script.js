// Toggle Hello text color
var h1 = document.querySelector("h1");
var b1 = document.querySelector(".btn button");

let isToggled = false;

b1.addEventListener('click', () => {
    if (!isToggled) {
        h1.textContent = "ok";
        h1.style.color = "red";
    } else {
        h1.textContent = "Hello";
        h1.style.color = "black";
    }
    isToggled = !isToggled;
});

// Swap images
var A = document.querySelector(".a");
var B = document.querySelector(".b");
var b2 = document.querySelector(".btn1 button");

b2.addEventListener('click', () => {
    var s1 = A.src;
    var s2 = B.src;
    A.src = s2;
    B.src = s1;
});

// Form validation
var form = document.querySelector('form');
var input = document.querySelectorAll('input');
var P1 = document.querySelector('.error-message');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let hasError = false;
    input.forEach((inp) => {
        if (inp.value.trim() === '') {
            P1.textContent = "error: All fields are required.";
            P1.style.color = "red";
            hasError = true;
        }
    });
    if (!hasError) {
        P1.textContent = ""; // Clear error message if no errors
    }
});

// List item management
var ADD = document.querySelector('.add');
var DEL = document.querySelector('.remove');
var inp = document.querySelector('.inp');
var ul = document.querySelector('#ul');

ADD.addEventListener('click', () => {
    let valueToAdd = inp.value.trim();
    if (valueToAdd === '') {
        alert("Please enter the text to add.");
    } else {
        let li = document.createElement('li');
        li.textContent = valueToAdd;
        ul.appendChild(li);
        inp.value = "";
    }
});

DEL.addEventListener('click', () => {
    let items = ul.getElementsByTagName('li');
    let valueToRemove = inp.value.trim();

    if (valueToRemove === '') {
        alert("Please enter the text of the item you want to delete.");
        return;
    }

    let itemFound = false;
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === valueToRemove) {
            ul.removeChild(items[i]);
            inp.value = "";
            itemFound = true;
            break;
        }
    }

    if (!itemFound) {
        alert(`Item "${valueToRemove}" not found.`);
    }
});

// Timer
var str = document.querySelector('.start');
var stp = document.querySelector('.stop');
var res = document.querySelector('.reset');
var h2 = document.querySelector('h2');
var count = 0;
var int;

str.addEventListener('click', () => {
    int = setInterval(() => {
        h2.textContent = count;
        ++count;
    }, 1000);
});

stp.addEventListener('click', () => {
    clearInterval(int);
});

res.addEventListener('click', () => {
    clearInterval(int);
    h2.textContent = "0";
    count = 0;
});
