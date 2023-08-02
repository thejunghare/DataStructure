package main

import "fmt"

// create a stack using strcut
type Stack struct {
	Values []int
	top int
}

func NewStack() *Stack {
	return &Stack{
		// Empty slice of type int with length 0
		// make([]dtattype, length, capcity)
		Values: make([]int, 0),

		// set the initial value to -1 which ensure the stack is empty
		top: -1,
	}
}

// Push at top
func (st *Stack) Push(value int){
	st.Values = append(st.Values, value)
	st.top++
}

// Pop and rreturn the top value
func (st *Stack) Pop() int {
	// return 0 if stack is empty
	if st.isEmpty(){
		return 0
	}

	// else pop from stack
	value := st.Values[st.top]
	st.top--
	return value
}

// Check if the stack is empty
func (st *Stack) isEmpty() bool {
	// if the top == -1, means the stack is empty
	return st.top == -1
}

func main(){
	st := NewStack()

	// Push elements to stack
	st.Push(1)
	st.Push(2)

	// Pop eleements form stack
	fmt.Println("Pop :", st.Pop())
	fmt.Println("Pop :", st.Pop())
}