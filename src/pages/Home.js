
// APP IMPORTS
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../stylesheets/pages/Home.scss';
import {theme} from '../helper/constants';
// Components
import {Circle, IconText} from '../stylesheets/components/icons';
import FlagIcon from '@material-ui/icons/Flag';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Timer from '../components/Timer';

//
const Home = (props) => {

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


  // Page Constants
  const iconSize = 280;
  const iconColor = theme.light;
  const iconTextColor = "white";
  // Return JSX
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
          <Timer timerActive={timerStart}/>
        </div>
        {/* PROGRESS */}
      </div>

      {/* ICONS - BOTTOM BAR */}
      <div className="home-bottom-bar">
        <div className="home-bottom"> {/* TODO: Add Links to Icons to appropriate pages */}
          {/* TAGS */}
          <IconText size={iconSize} textColor={iconTextColor} moveUp={0}>
            <BookmarkIcon className="home-icon" style={{ fontSize: iconSize, color: iconColor }}/>
            <h1>TAGS</h1>
          </IconText>
          {/* STATS */}
          <IconText size={(iconSize-10)} textColor={iconTextColor} moveUp={0}>
            <Circle color= {iconColor} size={(iconSize-10)}/>
            <h1 style={{fontSize: ((iconSize-10)/4)}}>STATS</h1>
          </IconText>
          {/* GOALS */}
          <IconText size={(iconSize)} textColor={iconTextColor} moveUp={30} moveRight={18}>
            <FlagIcon className="home-icon" style={{ fontSize: (iconSize+20), color: iconColor }}/>
            <h1>GOALS</h1>
          </IconText>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
