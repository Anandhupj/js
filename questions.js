function largest(){
    const arr=[3,7,2,9,5]
    const large=Math.max(...arr)
    return large
  } 
  console.log(largest())

  function removeDuplicates(arr) {
    return[...new Set (arr) ]
  }
  let arrayWithDuplicates = [ 1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
  let arrayWithoutDuplicates = removeDuplicates (arrayWithDuplicates);
  console.log(arrayWithoutDuplicates);

  let str="hello"
  let count=0
  for(i=0;i<str.length;i++){
    if(str[i]=='a'|| str[i]=='e'|| str[i]=='i'||str[i]=='o'||str[i=='u'])
  
  {
    count++
  }
}
  console.log(count);
  
  
  