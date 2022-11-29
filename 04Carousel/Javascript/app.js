// Catch the slide show img
const imageOne = document.getElementById('img-1')
const imageTwo = document.getElementById('img-2')

// Catch the next button
const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')

// add event listener to unhide img when clicked on right arrow
rightArrow.addEventListener('click', function () {
    imageTwo.style.display = 'block'
    console.log('I was Clicked')
})

// Test the catch
console.log(rightArrow)