import '../scss/style.scss';
import getElements from './elements';
import { editTimeDisplay, displayStoper } from './textEdit';

const log = (log) => console.log(log);

const state = {
  value: 0,
  start: false,
};

const startCounting = () => {
  state.start = true;
  const { elements } = state;
  elements.startBtn.classList.add('hidden');
  elements.buttonAlign.classList.remove('hidden');
  setInterval(() => {
    if (state.start) {
      state.value++;
      displayStoper(elements.clock, editTimeDisplay(state.value));
    }
  }, 1000);
};

const pauseCounting = () => {
  if (state.start) {
    state.start = false;
    state.elements.pauseBtn.textContent = 'Continue';
  } else {
    state.start = true;
    state.elements.pauseBtn.textContent = 'Pause';
  }
};

const init = () => {
  // get primary elements add to state
  state.elements = getElements();
  const { elements } = state;
  // display initial state
  displayStoper(elements.clock, editTimeDisplay(state.value));

  // set event listener for buttons
  //  1. Start Btn
  elements.startBtn.addEventListener('click', () => {
    if (state.start === false) startCounting();
  });
  //  2. pause Btn
  elements.pauseBtn.addEventListener('click', pauseCounting);
};

window.addEventListener('load', () => init());
