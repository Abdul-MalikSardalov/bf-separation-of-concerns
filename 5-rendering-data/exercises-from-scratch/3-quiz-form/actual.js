'use strict';

const actual = ({ question, answers, correct, selected }) => {
    const form = document.createElement('form');

    const p = document.createElement('p');
    p.innerText = question;

    form.append(p);

    answers.forEach((answer, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answers';

        if (index === selected) {
            input.checked = true;
        }

        const text = document.createElement('text');
        text.innerHTML = answer;

        if (input.checked) {
            if (index === correct) {
                text.className = 'correct';
                text.innerText = answer + ' √';
            } else {
                text.className = 'incorrect';
                text.innerText = answer + ' ✖';
            }
        }
        const br = document.createElement('br');
        form.append(input, text, br);
    });

    return form;
};
