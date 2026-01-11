const arr1 = [24,53,66,11,347,22]
var large = arr1[0]
for(let i=0;i<arr1.length-1;i++){
    
    // console.log(arr1[a]);
    if(arr1[i] > large){
        large = arr1[i]
    }    
}

console.log("Largest is: ",large);