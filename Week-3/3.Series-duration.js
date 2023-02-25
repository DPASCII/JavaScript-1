const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Friends",
    days: 3,
    hours: 2,
    minutes: 20,
  },
  {
    title: "Breaking Bad",
    days: 6,
    hours: 0,
    minutes: 50,
  },
  {
    title: "One Piece",
    days: 35,
    hours: 22,
    minutes: 6,
  },
];

function wastedTime() {
  let store = [];
  let totalWastedTime = 0;

  // Computation for % of life wasted average of 80 years life span
  for (i = 0; i < seriesDurations.length; i++) {
    store.push(
      Math.round(
        ((seriesDurations[i]["days"] / 365 +
          seriesDurations[i]["hours"] / (24 * 365) +
          seriesDurations[i]["minutes"] / (60 * 24 * 365)) /
          80) *
          10000
      ) / 100
    );
  }

  //Logging out individual series stats of wasting life
  for (i = 0; i < store.length; i++) {
    console.log(`${seriesDurations[i]["title"]} took ${store[i]}% of my life`);
  }

  for (i = 0; i < store.length; i++) {
    totalWastedTime = totalWastedTime + store[i];
  }

  //Logging out of total wasted percent of life
  console.log("");
  console.log(`In total that is ${totalWastedTime.toString()}% of my life`);
}

wastedTime();
