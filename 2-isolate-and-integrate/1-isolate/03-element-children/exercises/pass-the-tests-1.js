'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---
const data = [
  {
    newValue: 'toad',
  },
  {
    newValue: 'frog',
  },
  {
    newValue: 'salamander',
  },
];

const liElements = ulEl.querySelectorAll('li');

for (let i = 0; i < data.length; i++) {
  liElements[i].textContent = data[i].newValue;
}

// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actual = ulEl.children[i].innerHTML;
  const expected = expectedInnerHTMLs[i];
  console.assert(actual === expected, `Test child ${i}`);
}
