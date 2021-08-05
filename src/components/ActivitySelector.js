import React from 'react';
import {Circle} from '../stylesheets/components/icons';
import Selector from '../stylesheets/components/activitySelector';
// EXAMPLE -> TODO: Get from Firebase instead later
import {activities, colorID} from '../helper/example';

/*
-- Abstract
Used to select activity
-- Example
Select the 'Reading' activity
*/

/*
-- TODO:
In Firebase:
Create ID:Color Object, that way I can send around just the ID and get the rest of info from Firebase
{
  2: "#123456",
  3: "#234567",
  5: "#345678",
}
Create Color:Activity, that way I have info
{
  "#264653" : "Homework",
  "#2A9D8F" : "Reading",
}
*/

const ActivitySelector = (props) => {
  // Temporary Variables: 'activities' (Should be taken from Firebase later, but for now I'll just create them here)
  // TODO: Get variables from Firebase and not just create random ones

  return (
    <Selector size={props.size}>
      {
        Object.keys(colorID).map( (id) => {
          return  <div className="activitySelector-activity" key={id}>
                    <Circle color={colorID[id]} size={props.size/6} onClick={()=> {props.dispatchActivity({type: "update", payload: id})}}/>
                    <h2>{activities[id]}</h2>
                  </div>
        })
      }
    </Selector>
  );
}

export default ActivitySelector;