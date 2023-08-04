/* This example uses the slice to implement the stack ds in Golang */

package main

import "fmt"

// deckare a type of stack
type Stack []int

// Push function
func (st *Stack) Push(value int) {
	*st = append(*st, value)
}

// Pop function
func (st *Stack) Pop() int {
	// check if empty
	if st.isEmpty() {
		return 0
	}

	// if !empty
	top := (*st)[len(*st)-1] // remove the last elemenet from the slice
	*st = (*st)[:len(*st)-1] // make a new slice of remaining elements

	// return the top (lifo)
	return top
}

func (st *Stack) isEmpty() bool {
	// if length of slice is zero stack is empty
	if len(*st) == 0 {
		return true
	}

	return false
}

func main() {
	st := Stack{}

	st.Push(1)
	st.Push(2)

	fmt.Println("Pop elements", st.Pop())

}
