import { CountdownTimer } from './js/timer';
import './styles.css';


const timerCount = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 7, 2020'),
  
});

timerCount.CountdownTimer();