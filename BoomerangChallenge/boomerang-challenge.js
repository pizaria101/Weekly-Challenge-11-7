function checkBoomerang(arr) {
    let count = 0;

    for(let i = 1; i < arr.length - 1; i++){
        if(arr[i-1] === arr[i+1] && arr[i] !== arr[i-1]){
            count++;
        }
    }
    return count;
}

console.log(checkBoomerang([9, 5, 9, 5, 1, 1, 1]));
console.log(checkBoomerang([5, 6, 6, 7, 6, 3, 9]));
console.log(checkBoomerang([4, 4, 4, 9, 9, 9, 9]));