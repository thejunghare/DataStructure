package main

import (
	"fmt"
)

// Deque is a custom data structure to represent a deque (double-ended queue)
type Deque struct {
	data []rune
}

// NewDeque creates a new empty Deque
func NewDeque() *Deque {
	return &Deque{data: make([]rune, 0)}
}

// IsEmpty returns true if the deque is empty, otherwise false
func (d *Deque) IsEmpty() bool {
	return len(d.data) == 0
}

// AddFront adds an element to the front of the deque
func (d *Deque) AddFront(val rune) {
	d.data = append([]rune{val}, d.data...)
}

// AddBack adds an element to the back of the deque
func (d *Deque) AddBack(val rune) {
	d.data = append(d.data, val)
}

// RemoveFront removes and returns the front element from the deque
func (d *Deque) RemoveFront() rune {
	if d.IsEmpty() {
		return 0 // Assuming 0 represents an empty rune
	}
	front := d.data[0]
	d.data = d.data[1:]
	return front
}

// RemoveBack removes and returns the back element from the deque
func (d *Deque) RemoveBack() rune {
	if d.IsEmpty() {
		return 0 // Assuming 0 represents an empty rune
	}
	back := d.data[len(d.data)-1]
	d.data = d.data[:len(d.data)-1]
	return back
}

// IsPalindrome checks if a given string is a palindrome
func IsPalindrome(s string) bool {
	dq := NewDeque()

	// Add each character of the string to the back of the deque
	for _, char := range s {
		dq.AddBack(char)
	}

	// Compare characters from both ends of the deque
	for !dq.IsEmpty() {
		front := dq.RemoveFront()
		back := dq.RemoveBack()

		if front != back {
			return false
		}
	}

	return true
}

func main() {
	// testCases := []string{"radar", "hello", "level", "world", "madam", "algorithm"}
	testCases := []string{"bob"}

	for _, testStr := range testCases {
		if IsPalindrome(testStr) {
			fmt.Printf("%s is a palindrome.\n", testStr)
		} else {
			fmt.Printf("%s is not a palindrome.\n", testStr)
		}
	}
}
