
// APP IMPORTS
import React, {useState, useEffect, useReducer} from 'react';
import { Link } from "react-router-dom";
import '../stylesheets/pages/Home.scss';
import {theme} from '../helper/constants';
// Components
import {Circle, IconText} from '../stylesheets/components/icons';
import FlagIcon from '@material-ui/icons/Flag';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
// Reducers
import {timerReducer} from '../helper/reducers'

//
const Home = (props) => {

  // TODO: Have state for selected activity


  // TIMER VARIABLES

  const [timerMode, setTimerMode] = useState("START");
  const [timerStart, setTimerStart] = useState(false);

  // Stop/Start Timer
  const changeTimerMode = () => {
    if (timerStart === false) {
      setTimerMode("STOP");
      // props.dispatchTimer({type: 'start'});
      setTimerStart(true);
    } else {
      setTimerMode("START");
      // props.dispatchTimer({type: 'stop'});
      setTimerStart(false);
    }
  }

  // Timer Reducer
  const [stateCounter, dispatchCounter] = useReducer(timerReducer, {counter: 0});


  // PAGE CONSTANTS
  const iconSize = 280;
  const iconColor = theme.light;
  const iconTextColor = "white";
  // JSX
  return (
    <div className="page-home">
      <div className="home-top">
        {/* ACTIVITY SELECT */}
        <div className="home-activity">
          <Circle color={theme.color2} size={120} /> {/* TODO:  Change Color/Title depending on selected Activity Id*/}
          <h2>Reading</h2>
        </div>
        {/* TIMER */}
        <div className="home-timer">
          <button onClick={changeTimerMode}>{timerMode}</button>
          <Timer timerActive={timerStart} dispatchCounter={dispatchCounter}/>
        </div>
        {/* PROGRESS */}
        <div className="home-progress">
          <h1>Progress</h1>
          <h2>Daily</h2>
          <ProgressBar type="daily" counter={stateCounter.counter}/>
          <h2>Weekly</h2>
          <ProgressBar type="weekly" counter={stateCounter.counter}/>
          <h2>Mothly</h2>
          <ProgressBar type="monthly" counter={stateCounter.counter}/>
        </div>
      </div>

      {/* ICONS - BOTTOM BAR */}
      <div className="home-bottom-bar">
        <div className="home-bottom"> {/* TODO: Add Links to Icons to appropriate pages ! Can't navigate if timer on */}
          {/* TAGS */}
          <IconText size={iconSize} textColor={iconTextColor} moveUp={0} className="home-iconText centralize-child">
            <BookmarkIcon className="home-icon" style={{ fontSize: iconSize, color: iconColor }}/>
            <h1>TAGS</h1>
          </IconText>
          {/* STATS */}
          <IconText size={(iconSize-10)} textColor={iconTextColor} moveUp={0} className="home-iconText centralize-child">
            <Circle color= {iconColor} size={(iconSize-10)}/>
            <h1 style={{fontSize: ((iconSize-10)/4)}}>STATS</h1>
          </IconText>
          {/* GOALS */}
          <IconText size={(iconSize)} textColor={iconTextColor} moveUp={30} moveRight={18} className="home-iconText centralize-child">
            <FlagIcon className="home-icon" style={{ fontSize: (iconSize+20), color: iconColor }}/>
            <h1>GOALS</h1>
          </IconText>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
