$(function() {

    /* 1. Sa se scrie un program care va sterge toate link-urile din document la click pe un buton.*/
    $('#delete-links-button').click(function () {
        $('a').each(function() {
            $(this).parent().text("Link was removed!");
            $(this).remove();
        });
    });

    /* 2. Sa se scrie un program care afiseaza cate secunde a stat un utilizator cu mouse-ul pe un obiect. */
    var countdown;
    const mouseoverTarget = $('#target');

    mouseoverTarget.mouseenter(function () {
        const secondsMouseoverContainer = $('#timer');
        const secondsMouseoverTotalContainer = $('#timer-total');

        let secondsMouseover = 0;
        secondsMouseoverContainer.text('0');
        let secondsMouseoverTotal = parseInt(secondsMouseoverTotalContainer.text());

        countdown = setInterval(function () {
            secondsMouseover++;
            secondsMouseoverContainer.text(secondsMouseover);

            secondsMouseoverTotal++;
            secondsMouseoverTotalContainer.text(secondsMouseoverTotal);
        }, 1000);

    });

    mouseoverTarget.mouseleave(function() {
        clearInterval(countdown);
    })

    /* Se considera un formular care contine un input de tip numar de telefon care trebuie sa respecte urmatorul format (+40) 777 777 777.
    Sunt acceptate caracterele +, (, ) si orice cifra de la 0 la 9.
    Sa se scrie o functie de validare a datelor introduse in input care la fiecare schimbare a continutului input-ului sa arate in
    dreptul input-ului o bulina rosie daca acesta nu este valida si o bulina verde daca acesta este valid. */

    $('#tel').keyup(function() {
        const regex = /^(?:\(\+*[0-9]{2}\))? ?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/;
        const validationCue = $('#tel-validation');
        const value = $(this).val();

        if (value.length === 0) {
            validationCue.css('backgroundColor', 'transparent');
            return;
        }

        let match = regex.exec(value);
        let color = match === null ? 'red' : 'green';
        validationCue.css('backgroundColor', color);
    });

    /* Sa se construiasca dinamic un combobox (select) cu 6 optiuni. */
    const container = $('#dynamic-select-container');
    const options = {'1': 'option 1', '2': 'option 2', '3': 'option 3', '4': 'option 4', '5': 'option 5', '6': 'option 6'};
    let select = $('<select>', {id: 'dynamic-select', class: 'form-control'});

    for (let optionIndex in options) {
        $(select).append($('<option>', {value: optionIndex, text: options[optionIndex]}));
    }

    container.append(select);
});

