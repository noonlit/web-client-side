/* 1. Sa se scrie un program care va sterge toate link-urile din document la click pe un buton.*/

const deleteLinksButton = document.getElementById('delete-links-button');
deleteLinksButton.addEventListener('click', function () {
    let linkElements = document.getElementsByTagName('a');

    // iterate backwards because the list of elements changes with each remove()
    for(let i = linkElements.length - 1; i >= 0; i--) {
        let linkElement = linkElements[i];
        let parent = linkElement.parentElement;

        linkElement.remove();
        parent.textContent = "Link was removed!";
    }
});

/* 2. Sa se scrie un program care afiseaza cate secunde a stat un utilizator cu mouse-ul pe un obiect. */
const targetElement = document.getElementById('target');
var countdown;

targetElement.addEventListener('mouseenter', function() {
    const secondsMouseoverContainer = document.getElementById('timer');
    const secondsMouseoverTotalContainer = document.getElementById('timer-total');

    let secondsHovered = 0;
    secondsMouseoverContainer.textContent = '0';
    let secondsHoveredTotal = secondsMouseoverTotalContainer.textContent;

    countdown = setInterval(function () {
        secondsHovered++;
        secondsMouseoverContainer.textContent = String(secondsHovered);

        secondsHoveredTotal++;
        secondsMouseoverTotalContainer.textContent = secondsHoveredTotal;
    }, 1000);
});

targetElement.addEventListener('mouseleave', function() {
    clearInterval(countdown);
})

/* Se considera un formular care contine un input de tip numar de telefon care trebuie sa respecte urmatorul format (+40) 777 777 777.
Sunt acceptate caracterele +, (, ) si orice cifra de la 0 la 9.
Sa se scrie o functie de validare a datelor introduse in input care la fiecare schimbare a continutului input-ului sa arate in
dreptul input-ului o bulina rosie daca acesta nu este valida si o bulina verde daca acesta este valid. */

const telephoneInput = document.getElementById('tel');
telephoneInput.addEventListener('keyup', function() {
    const regex = /^(?:\(\+*[0-9]{2}\))? ?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/;
    const validationCue = document.getElementById('tel-validation');

    let value = telephoneInput.value;

    if (value.length === 0) {
        validationCue.style.backgroundColor = 'transparent';
        return;
    }

    let match = regex.exec(value);
    validationCue.style.backgroundColor = match === null ? 'red' : 'green';
});

/* Sa se construiasca dinamic un combobox (select) cu 6 optiuni. */
window.addEventListener('load', function() {
    const options = {'1': 'option 1', '2': 'option 2', '3': 'option 3', '4': 'option 4', '5': 'option 5', '6': 'option 6'};

    let selectContainer = document.getElementById('dynamic-select-container');

    let select = document.createElement('select');
    select.className = 'form-control';

    for (let optionIndex in options) {
        let option = document.createElement('option');
        option.value = optionIndex;
        option.text = options[optionIndex];
        select.add(option);
    }

    selectContainer.appendChild(select);
});


