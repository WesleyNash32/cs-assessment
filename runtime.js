const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

perf.start();
doublerAppend(largeArray);
let resultsAppend2 = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsert2 = perf.stop();

console.log('Results for the largeArray');
console.log("insert", resultsInsert2.preciseWords);
console.log("append", resultsAppend2.preciseWords);

perf.start();
doublerAppend(mediumArray);
let resultsAppend3 = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsert3 = perf.stop();

console.log('Results for the mediumArray');
console.log("insert", resultsInsert3.preciseWords);
console.log("append", resultsAppend3.preciseWords);

perf.start();
doublerAppend(smallArray);
let resultsAppend4 = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsert4 = perf.stop();

console.log('Results for the smallArray');
console.log("insert", resultsInsert4.preciseWords);
console.log("append", resultsAppend4.preciseWords);

perf.start();
doublerAppend(tinyArray);
let resultsAppend5 = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsInsert5 = perf.stop();

console.log('Results for the tinyArray');
console.log("insert", resultsInsert5.preciseWords);
console.log("append", resultsAppend5.preciseWords);

/*
After editing in the code that will get the results of the every type of array and having the result of the amount of time it will take. Each function scaled big and both are an O(n) because of they are using the length of the array. Next the function that was better was the append because it uses the push method which will push whatever you want to oush into the array at the end. While the unshift method will add something in the beginning and that makes it slower.
*/