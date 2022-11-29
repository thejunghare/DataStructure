// Catch the slide show img
const image = document.getElementById('img-1')
const imageTwo = document.getElementById('img-2')

const slideShow = document.getElementsByClassName('slide-show')

// Catch the next button
const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')

//making an array object
const arr = [{
    id: 1,
    img: 'https://github.com/sjprasad-bit/JavaScript-Projects/blob/main/04Carousel/img/img1.jpg'
}, {
    id: 2,
    img: 'https://github.com/sjprasad-bit/JavaScript-Projects/blob/main/04Carousel/img/img2.jpg'
}]

//setting inital slide to 0 (array's index starts at zero)
let currentSlide = 1

// load inital item
window.addEventListener('DOMContentLoaded', function () {
    let item = arr[currentSlide]
    image.src = item.image

//    slideShow.style.display = 'block'

    console.log('loaded')
})