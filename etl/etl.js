export const transform = (scores) => {
  let newScores = {};
  Object.entries(scores).forEach(([point, alphabets]) => {
    alphabets.forEach(alphabet => {
      newScores[alphabet.toLowerCase()] = Number(point);
    });
  });
  return newScores;
};
