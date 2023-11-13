const getId = () => window.crypto.getRandomValues(new Uint32Array(10))[0];

const outputEl = document.querySelector('output');
const buttonEl = document.querySelector('button');

const updateOutput = () => outputEl.textContent = getId();

// Set initial value
updateOutput();

buttonEl.addEventListener('click', updateOutput);
