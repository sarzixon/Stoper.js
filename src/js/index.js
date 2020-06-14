import '../scss/style.scss';
import getElements from './elements';
import { editTimeDisplay, displayStoper } from './textEdit';
import { startCounting, pauseCounting, resetCounting } from './counting';

const log = (log) => console.log(log);

(() => {
  const state = {
    value: 0,
    start: false,
    interval: false,
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
      if (state.start === false) startCounting(state);
    });
    //  2. pause Btn
    elements.pauseBtn.addEventListener('click', () => pauseCounting(state));
    // 3. reset Btn
    elements.resetBtn.addEventListener('click', () => resetCounting(state));
  };

  window.addEventListener('load', () => init());
})();
