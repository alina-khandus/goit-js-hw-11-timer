const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
}

class CountdownTimer{
  constructor({ targetDate}){
    this.targetDate = targetDate;
    this.start();
    this.clockStart();
    
  }

   clockStart() {
    const dateCurrent = Date.now();
    const diffTime = this.targetDate - dateCurrent;
    this.updateClock(this.getTimeComponents(diffTime))
  }

  start() {
  setInterval(() => {
    this.clockStart()
  }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(0, 2);
  }
  
  updateClock({days, hours, mins, secs}) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
}

export { CountdownTimer };

