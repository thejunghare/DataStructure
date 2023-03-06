// Palindrome Program using the stack data structure

let letters = []
let word = 'Prasad'
let reverseWord = ''

// put the letters in word into stack
for (let index = 0; index < word.length; index++) {
    letters.push(word[index])
}

// pop off the stack in reverse order
for (let index = 0; index < word.length; index++) {
    reverseWord += letters.pop()
}

console.log(word)
console.log(reverseWord)