const usageLimit = Math.floor(Math.random() * 200);
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = new Date();
const formattedDate = new Intl.DateTimeFormat("en", options).format(date);
let usage = [];

//show duration of all activities
function showStatus(date) {
  let totalUsage = 0;
  let numberOfActivities = 0;
  //check for errors
  if (usage.length == 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  //calculate total duration for specified date
  for (i = 0; i < usage.length; i++) {
    if (usage[i]["date"] == date) {
      totalUsage += usage[i]["duration"];
      numberOfActivities += 1;
    }
  }

  //are you smartphoning too much
  if (totalUsage > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
    return false;
  }

  console.log(
    `You have added ${numberOfActivities} activities. They amount to ${totalUsage} min. of usage on ${formattedDate}`
  );
  return true;
}

//adding activity
function addActivity(activity, duration) {
  //checking for errors
  if (
    typeof activity !== "string" ||
    typeof duration !== "number" ||
    duration <= 0
  ) {
    console.log("Error");
    return;
  }

  usage.push(
    (object = {
      date: formattedDate,
      activity: activity,
      duration: duration,
    })
  );
}

function favoriteActivity() {
  let act = [];
  let dur = [];
  let use = [];
  let largest = 0;

  //store all activities
  for (i = 0; i < usage.length; i++) {
    act.push(usage[i]["activity"]);
  }

  //store all durations
  for (i = 0; i < usage.length; i++) {
    dur.push(usage[i]["duration"]);
  }

  //store duplicate activities
  //Found this code paexplain pls
  let findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) != index);

  let duplicate = [...new Set(findDuplicates(usage["activity"]))];

  console.log(duplicate);
  //add all duration of duplicate activities
  for (i = 0; i < duplicate.length; i++) {
    let temp = 0;
    for (j = 0; j < usage.length; j++) {
      if (usage[j]["activity"] == duplicate[i]) {
        temp = temp + usage[j]["duration"];
      }
    }
    use.push(temp);
  }
  console.log(use);

  //find highest duration within duplicate activities
  for (i = 0; i <= largest; i++) {
    if (use[i] > largest) {
      largest = use[i];
    }
  }

  //find highest duration in usage array
  for (i = 0; i <= largest; i++) {
    if (dur[i] > largest) {
      largest = dur[i];
    }
  }
  console.log(largest);
}

addActivity("Youtube", 28);
addActivity("Facebook", 15);
addActivity("Youtube", 20);
addActivity("Youtube", 15);
addActivity("Chrome", 30);
addActivity("Chrome", 24);
console.log(usage);
showStatus(formattedDate);
favoriteActivity();
