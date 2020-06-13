const editTimeDisplay = (value) => {
  let base;
  if (value === 0) {
    base = '00:00';
  } else if (value < 10) {
    base = `00:0${value}`;
  } else if (value >= 10) {
    //check minutes
    let min = (value / 60).toString().split('.')[0];
    // calc seconds - minutes
    let sec = value - min * 60;
    base = `${min >= 10 ? min : `0${min}`}:${sec >= 10 ? sec : `0${sec}`}`;
  }
  return base;
};

const displayStoper = (target, value) => (target.textContent = value);

export { editTimeDisplay, displayStoper };
