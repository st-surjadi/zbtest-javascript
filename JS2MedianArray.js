// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  if (input.length === 0) return 'No Input Array';

  const mid = Math.floor(input.length / 2);
  const sorted = input.sort((a, b) => { return a - b });

  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}

console.log(result(input));