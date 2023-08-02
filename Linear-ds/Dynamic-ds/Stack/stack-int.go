package main

import "fmt"

// create a stack using strcut
type Stack struct {
	Values []int
	top int
}

func NewStack() *Stack {
	return &Stack{
		Values: make([]int, 0),
		top: -1,
	}
}

// Push at top
func (st *Stack) Push(value int){
	st.top++
	st.Values = append(st.Values, value)
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
	return st.top == -1
}

func main(){
	st := NewStack()

	// Push elements to stack
	st.Push(1)
	st.Push(2)

	// Pop eleements for stack
	fmt.Println("Pop :", st.Pop())
	fmt.Println("Pop :", st.Pop())
}