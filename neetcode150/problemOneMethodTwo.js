let nums = [1, 3, 5, 2, 4, 6];
let duplicatefoundflag = false;
let sortednums = nums.sort();

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
        console.log(true);
        duplicatefoundflag = true;
        break;
    }

    if (duplicatefoundflag) break;
}

if (!duplicatefoundflag) console.log(false);