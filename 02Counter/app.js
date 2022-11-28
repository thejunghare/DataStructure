// Catch the button
const increase = document.getElementById('increase-btn')
const decrease = document.getElementById('decrease-btn')
const reset = document.getElementById('reset-btn')
const pervoiusCount = document.getElementById('last-count')

// catch the counter
const count = document.querySelector('#count')

let counter = 0

increase.addEventListener('click', function () {
    counter++
    count.innerHTML = counter
    console.log(counter)
})

decrease.addEventListener('click', function () {
    counter--
    count.innerHTML = counter
    console.log(counter)
})

reset.addEventListener('click', function () {
    count.innerHTML = 0
    pervoiusCount.innerHTML = counter

})