# ALgorithm

## What Big O

Big O notation is a metric for ***determining the efficiency of an algorithm***, it represent worst case complexity and define the runtime required to execute an algorithm. ***It also measures efficiency and performance of algorithm using time and space complexity***.

## What is Time and Space complexity

- Time complexity :- specifies how long it will take to execute an algorithm ***as a function of the input***.

- Time complexity :- specifies total amount of space or memory required to execute an algorithm ***as a function of the input***.

## Time as a function of input size

```
const calculatesum = (input) => {
    let sum = 0
    
    for (let i = 0; i <= input; i++){
        sum += i    
    }
    
    return sum
}
```
We have an algorithm that computes the sum of numbers based on your input. If your input is 4, it will add 1+2+3 to output 10; if your input is 5, it will output 15 (meaning 1+2+3+4+5)

![algorithm](./algorithm.png "Example algorithm")
