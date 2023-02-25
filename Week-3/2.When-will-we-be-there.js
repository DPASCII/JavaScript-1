const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelTimeCalculator(info) {
  let time = info.destinationDistance / info.speed;
  const remainder = ((time * 100) % 100) / 100;
  const hours = time - remainder;
  const minutes = Math.round(remainder * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = travelTimeCalculator(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
