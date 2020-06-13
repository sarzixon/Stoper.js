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
  if (state.start) {
    setInterval(() => {
      state.value++;
      displayStoper(state.elements.clock, editTimeDisplay(state.value));
    }, 1000);
  }
};

const init = () => {
  // get primary elements add to state
  state.elements = getElements();
  const { elements } = state;
  // display initial state
  displayStoper(elements.clock, editTimeDisplay(state.value));

  // set event listener for buttons
  elements.startBtn.addEventListener('click', () => startCounting());
};

window.addEventListener('load', () => init());
