/*
--- DESCRIPTION
This is the landing page. From which we can do the following:
- Select and Record activity
- See Progress of activity
- Go to Tags, Stats and Goals pages
*/

// PAGE IMPORTS
import React, {useState, useReducer, useEffect} from 'react';
// import { Link } from "react-router-dom";
import '../stylesheets/pages/Home.scss';
import {theme} from '../helper/constants';
// Components
import {Circle, IconText} from '../stylesheets/components/icons';
import FlagIcon from '@material-ui/icons/Flag';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import ActivitySelector from '../components/ActivitySelector';
// Reducers
import {timerReducer, activityReducer} from '../helper/reducers'
// EXAMPLE -> TODO: Later replace with getting from Firebase
import {activities, colorID} from '../helper/example';

//
const Home = (props) => {

  // --- VARIABLES

  // ACTIVITY VARIABLES
  const [activityColor, setActivityColor] = useState("white");
  const [activityName, setActivityName] = useState("No Activities");
  // Activity Selector
  const [selectorShow, setSelectorShow] = useState(false);


  // TIMER VARIABLES
  const [timerMode, setTimerMode] = useState("START");
  const [timerStart, setTimerStart] = useState(false);
  // Stop/Start Timer
  const changeTimerMode = () => {
    setSelectorShow(false);
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

  // --- REDUCERS

  // Timer Reducer
  const [stateCounter, dispatchCounter] = useReducer(timerReducer, {counter: 0});
  // Activity Reducer (colorID -> ID is also activity ID)
  const [stateActivity, dispatchActivity] = useReducer(activityReducer, {id: -1});

  // --- DO ON START

  // Get Valid Activity
  const isEmpty = (obj) => {
    for (var key in obj) {
      if(obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  useEffect(() => {
    if(isEmpty(colorID)) {
      dispatchActivity({type: "update", payload: -1});
    } else {
      dispatchActivity({type: "update", payload: Object.keys(colorID)[0]}); // default
    }
  }, []);

  // --- DO ON VARIABLE CHANGE

  // Activity Selection Changed
  useEffect(() => {
    if (stateActivity.activity !== -1) {
      // stateActivity.activity == ID
      setActivityColor(colorID[stateActivity.activity]); // find 'color' with key 'ID'
      setActivityName(activities[stateActivity.activity]); // find 'activity' with key 'color'
    } else {
      // default for when there are no created activities
      setActivityColor("white");
      setActivityName("No Activities: Go To Tags To Create Activity");
    }
  }, [stateActivity]);


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
          <Circle color={activityColor} size={120} onClick={() => {setSelectorShow(!selectorShow)}} />
          <h2>{activityName}</h2>
          {selectorShow ? <ActivitySelector size={200} dispatchActivity={dispatchActivity}/> : null}
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
          <ProgressBar type="daily" counter={stateCounter.counter} color={activityColor} activity={stateActivity.activity}/>
          <h2>Weekly</h2>
          <ProgressBar type="weekly" counter={stateCounter.counter} color={activityColor} activity={stateActivity.activity}/>
          <h2>Mothly</h2>
          <ProgressBar type="monthly" counter={stateCounter.counter} color={activityColor} activity={stateActivity.activity}/>
        </div>
      </div>

      {/* ICONS - BOTTOM BAR */}
      <div className="home-bottom-bar">
        <div className="home-bottom"> {/* TODO: Add Links to Icons to appropriate pages ! Can't navigate if timer on */}
          {/* TAGS */}
          <IconText size={iconSize} textColor={iconTextColor} moveUp={0} className="home-iconText">
            <BookmarkIcon className="home-icon" style={{ fontSize: iconSize, color: iconColor }}/>
            <h1>TAGS</h1>
          </IconText>
          {/* STATS */}
          <IconText size={(iconSize-10)} textColor={iconTextColor} moveUp={0} className="home-iconText">
            <Circle color= {iconColor} size={(iconSize-10)}/>
            <h1 style={{fontSize: ((iconSize-10)/4)}}>STATS</h1>
          </IconText>
          {/* GOALS */}
          <IconText size={(iconSize)} textColor={iconTextColor} moveUp={30} moveRight={18} className="home-iconText">
            <FlagIcon className="home-icon" style={{ fontSize: (iconSize+20), color: iconColor }}/>
            <h1>GOALS</h1>
          </IconText>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
