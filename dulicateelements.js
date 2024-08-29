function removeDuplicates(arr) {
    return[...new Set (arr) ]
  }
  let arrayWithDuplicates = [ 1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
  let arrayWithoutDuplicates = removeDuplicates (arrayWithDuplicates);
  console.log(arrayWithoutDuplicates);