// TODO : implement stack data structure using stack class

// Function provide by the stack ds: push(), pop(), peeK(), etc

// create a stack
class Stack {
    constructor() {
        this.count = 0
        this.storage = {}

        // Adds a value onto the end of the stack
        this.push = function (value) {
            this.storage[this.count] = value
            this.count++
        }

        // Removes and returns the value at the end of the stack
        this.pop = function () {
            if (this.count === 0) {
                return undefined
            }

            this.count--
            let result = this.storage[this.count]
            delete this.storage[this.count]
            return result
        }

        this.size = function () {
            return this.count
        }

        this.peek = function () {
            return this.storage[this.count - 1]
        }
    }
}

let obj = new Stack()
obj.push(1)
obj.push(2)
console.log(obj.peek())
console.log(obj.peek())
console.log(obj.size())
console.log(obj.pop())
console.log(obj.size())