function union (arr1,arr2){
let s =[1,2,3,4]

for (let i = 0; i < arr2.length; i++) {
    if(s.indexOf(arr2[i]=== -1)){
        s.push(arr2[i]);
    }
}
    return s;

    
}
console.log(union([1,2,3,4],[5,6,7,8]));


