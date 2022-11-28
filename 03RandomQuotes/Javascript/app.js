// Catch the Generate now button
const generateButton = document.getElementById('genButton')
// Catch the quote text
const quote = document.getElementById('quoteText')

// Create an array for random quotes
const arr_quotes = [
    `when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.`,
                    `Programs must be written for people to read, and only incidentally for machines to execute.`,
                    `Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live`]

generateButton.addEventListener('click', function(){
    randomNumber = Math.floor((Math.random() * arr_quotes.length))
    quote.innerHTML = arr_quotes[randomNumber]
})