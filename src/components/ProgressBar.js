/*
--- DESCRIPTION
Shows progress of activity: hours done / hours goal.
*/
import React, {useState, useEffect} from 'react';
import Bar from '../stylesheets/components/progressBar';
import {activityInfo} from '../helper/example';

const ProgressBar = (props) => {

  // BAR WIDTH
  const width = 380;

  // GOALS (in hours)
  const [goal, setGoal] = useState(2);

  // HOURS (not including counter)
  const [hours, setHours] = useState(0.5);

  // PROGRESS
  const [progress, setProgress] = useState(0.25)


  // GET INFO
  // TODO: Collect goal and hours from Firebase using the props.activity and props.type, update state
  // once counter is stopped, the record gets updated into Firebase hence the calculation and correct value of counter=0
  useEffect(() => {
    if (props.activity!==-1 && props.activity!==undefined) {
      // TODO: Get it from Firebase and not example.js (activityInfo)
      setGoal(activityInfo[props.activity].goals[props.type]);
      setHours(activityInfo[props.activity].done[props.type]);
    } else { // default for no activity
      setGoal(1);
      setHours(0);
    }
  }, [props.activity, props.type]);

  // SET PROGRESS
  useEffect(() => {
    // (hours done) / (goal) == progress
    let prog = (Math.round(1000*( (hours+(props.counter/3600)) /goal))) / 1000; // progress to goal
    if (prog>=1){
      setProgress(1); // in case surpass goal, keep at max
    } else {
      setProgress(prog); // otherwise, set progress to (hours done) / (goal)
    }
    console.log(`counter: ${props.counter} + hours: ${hours} = progress: ${prog} `);
  }, [hours, goal, props.counter]);

  
  return (
    <Bar width={width} progress={progress*width} color={props.color}>
      <div className="progressBar-back"></div>
      <div className="progressBar-front"></div>
    </Bar>
  )
}

export default ProgressBar;