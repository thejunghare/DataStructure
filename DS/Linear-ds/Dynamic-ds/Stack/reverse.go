package main

import "fmt"

type Stack []rune

func (st *Stack) Push(value rune) {
	*st = append(*st, value)
}

func (st *Stack) Pop() (rune, bool) {
	if st.isEmpty() {
		return 0, false
	}

	top := (*st)[len(*st)-1]
	*st = (*st)[:len(*st)-1]

	return top, true
}

func (st *Stack) isEmpty() bool {
	if len(*st) == 0 {
		return true
	}

	return false
}

// push the input in arr of stack
func reversestring(word string) string {
	stack := Stack{}

	var reversed string

	for _, val := range word {
		stack.Push(val)
	}

	for {
		if char, ok := stack.Pop(); ok {
			reversed += string(char)
		} else {
			break
		}
	}

	return reversed
}

func main() {
	word := "Prasad"
	fmt.Printf("%s word in reverse %s\n", word, reversestring(word))
}
