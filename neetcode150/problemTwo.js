/*
1. get the element eg. 7 index position 1 and subtract from the traget so 9-7 = 2 
now check if 2 exist in array, if yes then return they re position

2. get the first and second element check if element return values if equal to target value
if yes return it.

3. sort the array then subtract target from the element and search for the result using binary search
*/

let nums = [15, 11, 7, 3, 1]; // * [3, 7, 11, 15]
let sorted_nums = nums.sort((a, b) => a - b);
let target = 10;
let exists = false;

function usingMethodOne(nums, target) {
    console.time('executionTime');

    for (let i = 0; i < nums.length; i++) {
        let num = target - nums[i]
        if (ifExists(num)) {
            console.log(i)
        }
    }

    console.timeEnd('executionTime');
}

function ifExists(toFind) {
    for (let i = 0; i < nums.length; i++) {
        if (toFind === nums[i]) {
            exists = true;
            return i;
        }
    }
}

function usingMethodTwo(nums) {
    console.time('executionTime');

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(i, j);
                break;
            }
        }
    }

    console.timeEnd('executionTime');
}

function usingMethodThree(nums, target) {
    console.time('execution time');

    // ! sort
    //console.log(`sorted array -> ${sorted_nums}`); // [1, 3, 7, 11, 15]

    /*for (let i = 0; i < nums.length; i++) {
        // ! sub and get the number to be searched in array
        let subResult = target - nums[i]; // 7
        console.log(binarySearch(nums, subResult));
    }*/

    for (let i = 0; i < nums.length; i++) {
        let subResult = target - nums[i];
        let index = binarySearch(sorted_nums, subResult);

        if (index !== -1) {
            console.log(`Pair at indices [${i}, ${index}]`);
            break;
        }
    }

    console.timeEnd('execution time');
}

function binarySearch(sorted_nums, toFind) {
    let low = 0;
    let high = sorted_nums.length - 1;
    let mid;
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);

        if (sorted_nums[mid] == toFind)
            return mid;
        if (sorted_nums[mid] > toFind)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

// usingMethodOne(nums, target);
// usingMethodTwo(nums);
usingMethodThree(nums, target);