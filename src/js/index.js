import '../scss/style.scss';
import getElements from './elements';

const log = (log) => console.log(log);

const state = {
  value: 70,
  start: false,
};

const transformStoper = (value) => {
  let base;
  if (value === 0) {
    base = '00:00';
  } else if (value < 10) {
    base = `00:0${value}`;
  } else if (value >= 10) {
    //check minutes
    let min = (value / 60).toString().split('.')[0];
    // check seconds - minutes
    let sec = value - min * 60;
    base = `${min >= 10 ? min : `0${min}`}:${sec >= 10 ? sec : `0${sec}`}`;
  }
  return base;
};

const displayStoper = (value) => (state.elements.clock.textContent = value);

const init = () => {
  // get primary elements add to state
  state.elements = getElements();

  // display initial state
  displayStoper(transformStoper(state.value));

  // set event listener for buttons
};

window.addEventListener('load', () => init());
