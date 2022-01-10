// Expected Result : 
// [
//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },
//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },
//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.

const source = [
  {
    id: "1",
    data: {
      first_name: "Rian",
      last_name: "Nugraha"
    },
    school: {
      id: "1",
      data: "PLMK-JKT"
    },
  },
  {
    id: "2",
    full_name: "Ari Santoso",
    school: {
      id: "1",
      short_name: "GRSR",
      data: "JKT"
    },
  },
  {
    id: "3",
    data: {
      first_name: "Rahman",
      last_name: "Sunggara"
    },
    school: {
      id: "1",
      short_name: "GELM",
      data: "JKT"
    },
  },
  {
    id: "4",
    data: {
      first_name: "Rian",
      last_name: "Nugraha"
    },
    school: {
      id: "2",
      data: "PLMK-BDG"
    },
  },
]

function result(num) {
  // The question shows that the 'result' function receives input num but line 75 calls the function with input 'source' object.
  // Assumption:
  // The 'result' function received input num id 1 and will return the array for students of specific school using id of school.
  const formattedArray = [];
  source.forEach(e => {
    if (e.school.id == num) {
      formattedArray.push(
        {
          name: e.full_name ? e.full_name : `${e.data.first_name} ${e.data.last_name}`,
          // Assumption: If there is school's short_name then the short_name needs to be combined with school data.
          school_name: e.school.short_name ? `${e.school.short_name}-${e.school.data}` : e.school.data
        }
      )
    }
  });
  return formattedArray;
}

// console.log(result(source)); 
console.log(result(1)); // Assumption: 'result' function received num id not array 'source'.