// Implement queue using slice
package main

import "fmt"

type Queue struct {
	item []int
}

// Perfom enqueue (insertion)
func (q *Queue) Enqueue(item int) {
	q.item = append(q.item, item)
}

// Perfrom dequeue (deletion)
func (q *Queue) Dequeue() int {
	// enter item on first posititon
	item := q.item[0]

	// Remove 0th element and create a new slice of remaining elements
	q.item = q.item[1:]

	// returnt the item
	return item
}

// Check if empty
func (q * Queue) isEmpty() bool {
	return len(q.item) == 0
}

func main(){
	q := &Queue{}

	// Enqueue
	q.Enqueue(1)
	q.Enqueue(2)
	q.Enqueue(3)
	q.Enqueue(4)

	// Dequeue
	fmt.Println(q.Dequeue())
}