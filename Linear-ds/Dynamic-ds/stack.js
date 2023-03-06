// TODO: Reverse string program using the stack data structure

// functions Provide: push, pop, length, peek

// word to be reversed
let word = 'Prasad'

// store the reversed word in reverseWord
let reverseWord = ''

// letters works as an empty array / stack
let letters = []

// put the letters in word into stack
for (let index = 0; index < word.length; index++) {
    letters.push(word[index])
    // console.log(letters)
}

// pop off the stack in reverse order
for (let index = 0; index < word.length; index++) {
    reverseWord += letters.pop()
    // console.log(letters)
}

console.log(word)
console.log(reverseWord)