import React, { useState, useEffect} from 'react';

// Timer Code From: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2

const Timer = (props) => {

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [hour, setHour] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  // TODO: If timer starts on one day and ends on another, between day flip, stop and start timer
  // TODO: Once timer stops, update firebase days activities array (maybe use helper function)

  // Initialize and Continue Counter
  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const hourCounter = Math.floor(counter / 3600);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
        const computedHour = String(hourCounter).length === 1 ? `0${hourCounter}`: hourCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);
        setHour(computedHour);
        setCounter(counter => counter + 1);
      }, 1000)
    }
    return () => {
      props.dispatchCounter({type: "update", payload: counter});
      return clearInterval(intervalId)
    };
  }, [isActive, counter])

  // Record Counter
  useEffect(()=> {
    if (props.timerActive === false){
      if (counter!==0){ // if it was on, and has been turned off
        // TODO: Record counter into firebase 
        console.log('Counter timerActive: ', counter)
        setIsActive(false);
      }
      setCounter(0);
    } else { // if it was off, and has been turned on
      setIsActive(true);
    }
    
  }, [props.timerActive])


  return (
    <div className="timer">
        <h1>
          <span className="timer-hour">{hour}</span>
          <span>:</span>
          <span className="timer-minute">{minute}</span>
          <span>:</span>
          <span className="timer-second">{second}</span>
        </h1>
    </div>
  );
}

export default Timer;