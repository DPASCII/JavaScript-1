function getSentimentScore(string) {
  //declare object with score, positive words, negative words
  const output = { score, positiveWords, negativeWords };

  //Turn string into array
  const arr = string.split(" ");

  //define positive and negative words
  const pos = ["good", "happy", "amazing", "super", "awesome"];
  const neg = ["bad", "sad", "shitty", "stupid", "crappy"];

  //compare, count, and extract positive and negative words into the object
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < pos.length; j++) {
      if (pos.filter((word) => arr[i] == pos[j])) {
        output.positiveWords.push(pos.filter((word) => arr[i] == pos[j]));
        output.score += 1;
      } else if (neg.filter((word) => arr[i] == neg[j])) {
        output.negativeWords.push(neg.filter((word) => arr[i] == neg[j]));
        output.score -= 1;
      }
    }
  }
  //return object
  return output;
}
