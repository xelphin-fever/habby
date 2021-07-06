import React, {useState, useEffect} from 'react';
import Bar from '../stylesheets/components/progressBar';

const ProgressBar = (props) => {

  // BAR WIDTH
  const width = 380;

  // TODO: Collect goal and hours from Firebase using the props.type, update state

  // GOALS (in hours)
  const [goal, setGoal] = useState(2);

  // TODO: Collect and calculate hours from Firebase and update on any change
  // once counter is stopped, the record gets updated into Firebase hence the calculation and correct value of counter=0

  // HOURS (not including counter)
  const [hours, setHours] = useState(0.5);

  // PROGRESS
  const [progress, setProgress] = useState(0.25)


  useEffect(() => {
    let prog = (Math.round( 1000*((hours+(props.counter/3600))/goal)) ) / 1000;
    if (prog>=1){
      setProgress(1)
    } else {
      setProgress(prog);
    }
    console.log(`counter: ${props.counter} + hours: ${hours} = progress: ${prog} `);
  }, [hours, goal, props.counter])


  
  return (
    <Bar width={width} progress={progress*width}>
      <div className="progressBar-back"></div>
      <div className="progressBar-front"></div>
    </Bar>
  )
}

export default ProgressBar;