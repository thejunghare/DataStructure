let nums = [1, 3, 5, 2, 4, 5];
let duplicatefoundflag = false;

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            console.log(true);
            duplicatefoundflag = true;
            break;
        }
    }

    if (duplicatefoundflag) break;
}

if (!duplicatefoundflag) console.log(false);
