// Expected Result : [
//   { name: "Susanti", id: "1", score: 4, status_test: "fresher" },
//   { name: "Mei", id: "2", score: 7, status_test: "junior" },
//   { name: "Ros", id: "3", score: 9, status_test: "senior" },
//   { name: "Mail", id: "4", score: 2, status_test: "fresher" },
// ];

// Direction : Please specify the test result status for each candidate (arr2) based on indicator (arr1)
// Note : arr1 must be used

const arr1 = [
  { min_score: 1, status: "fresher" },
  { min_score: 5, status: "junior" },
  { min_score: 8, status: "senior" },
];

const arr2 = [
  { name: "Susanti", id: "1", score: 4, status_test: "" },
  { name: "Mei", id: "2", score: 7, status_test: "" },
  { name: "Ros", id: "3", score: 9, status_test: "" },
  { name: "Mail", id: "4", score: 2, status_test: "" },
];

function result(arr1, arr2) {
  arr2.forEach(e => {
    for (let i = arr1.length - 1; i >= 0; i--) {
      if (e.score >= arr1[i].min_score) {
        e.status_test = arr1[i].status;
        break;
      }
    }
  });

  return arr2;
}

console.log(result(arr1, arr2));