const getElements = () => {
  return {
    clock: document.querySelector('.stoper__clock'),
    startBtn: document.querySelector('.stoper__startBtn'),
    buttonAlign: document.querySelector('.stoper__buttonAlign'),
    pauseBtn: document.querySelector('.stoper__buttonAlign--pauseBtn'),
    resetBtn: document.querySelector('.stoper__buttonAlign--resetBtn'),
  };
};

export default getElements;
