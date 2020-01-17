export const transform = (scores) => {
  let newScores = {};
  Object.keys(scores).forEach(point => {
    scores[point].forEach(alphabet => {
      newScores[alphabet.toLowerCase()] = Number(point);
    });
  });
  return newScores;
};
