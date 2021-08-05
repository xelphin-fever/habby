
const activities = {
  2 : "Homework",
  5 : "Reading",
};
// color and it's id (only for existing activities)
const colorID = {
  2 : "#2A9D8F",
  5: "#E76F51",
};

// for each activity: goals == hours wanted, done == hours done
const activityInfo = {
  2 : {
    goals: {daily: 2, weekly: 14, monthly: 60},
    done: {daily: 1, weekly: 10, monthly: 10}, 
  },
  5 : {
    goals: {daily: 1, weekly: 14, monthly: 60},
    done: {daily: 0, weekly: 15, monthly: 15}, 
  },

}

export {activities, colorID, activityInfo};