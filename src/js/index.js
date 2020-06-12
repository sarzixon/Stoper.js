import '../scss/style.scss';
import getElements from './elements';

const log = (log) => console.log(log);
// log(elements);

const init = () => {
  // get primary elements;
  const elements = getElements();
};

window.addEventListener('load', () => init());
