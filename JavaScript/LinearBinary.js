const arr1 = [2,14,15,18,32,12,11,54]
const key = 32

const linear = arr1.includes(key)

console.log("Found :",linear);

function binary(arr,key){
    let start = 0
    let end = arr.length - 1
    while(start<=end){
        const mid = Math.floor((start+end)/2)

        if(arr[mid] === key){
            return mid
        }
        else if(arr[mid]<key){
            start = mid+1
        }
        else{
            start = mid -1
        }

    }
    return -1
}
const arr2 = [2,11,12,14,15,18,32,54]
const index = binary(arr2,key)
console.log("Element found at index: ",index)
