import { displayStoper, editTimeDisplay } from './textEdit';

const startCounting = (state) => {
  state.start = true;
  const { elements } = state;
  elements.startBtn.classList.add('hidden');
  elements.buttonAlign.classList.remove('hidden');
  if (state.interval === false) {
    state.interval = true;
    setInterval(() => {
      if (state.start) {
        state.value++;
        displayStoper(elements.clock, editTimeDisplay(state.value));
      }
    }, 1000);
  }
};

const pauseCounting = (state) => {
  if (state.start) {
    state.start = false;
    state.elements.pauseBtn.textContent = 'Continue';
  } else {
    state.start = true;
    state.elements.pauseBtn.textContent = 'Pause';
  }
};

const resetCounting = (state) => {
  state.value = 0;
  state.start = false;
  displayStoper(state.elements.clock, editTimeDisplay(state.value));
  state.elements.buttonAlign.classList.add('hidden');
  state.elements.startBtn.classList.toggle('hidden');
};

export { startCounting, pauseCounting, resetCounting };
