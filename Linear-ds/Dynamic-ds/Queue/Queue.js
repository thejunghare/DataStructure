// TODO: implement the queue ds
/*
function provided  by the queue ds :
    1. enqueue: add elements at end of the queue
    2. dequeue: remove elements from the front of the queue
    3. peek: get the front element without removing it
    4. isEmpty: check whether an element is present within an queue
    5. printQueue: print the elements present in queue
*/

function Queue() {
    collection = [];
    this.print = function () {
        console.log(collection);
    };

    // Add element to the end of the queue
    this.enqueue = function (element) {
        collection.push(element)
    }

    // Remove elements from front
    this.dequeue = function () {
        return collection.shift()
    }

    // Return the element in front
    this.front = function () {
        return collection[0]
    }

    // Return size of queue
    this.size = function () {
        return collection.length
    }

    // check if collection is empty
    this.isEmpty = function () {
        return (collection.length === 0)
    }
}

let obj = new Queue()

obj.enqueue('Awesome') // add Awesome to collection
obj.enqueue('Javascript') // add Javascript to collection
obj.print() // output: ['Awesome', 'Javascript']
obj.dequeue() // remove element form front -> i.e Awesome
obj.print() // output: ['Javascript']
console.log(obj.front())  // output: Javascript