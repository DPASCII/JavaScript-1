function getSentimentScore(string) {
  //declare object with score, positive words, negative words
  const output = { score: 0, positiveWords: [], negativeWords: [] };

  //Turn string into array
  const arr = string.split(" ");

  //define positive and negative words
  const pos = ["good", "happy", "amazing", "super", "awesome"];
  const neg = ["bad", "sad", "shitty", "stupid", "crappy"];

  //compare, count, and extract positive and negative words into the object

  //indexof or includes
  for (i = 0; i < arr.length; i++) {
    if (pos.includes(arr[i]) === true) {
      output.positiveWords.push(arr[i]);
      output.score += 1;
    }

    if (neg.includes(arr[i]) === true) {
      output.negativeWords.push(arr[i]);
      output.score -= 1;
    }
  }
  //return object
  return output;
}

const sentimentScore = getSentimentScore(
  "I am a good bad sad shitt super awesome fucker"
);

console.log(sentimentScore);
