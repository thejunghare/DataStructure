package main

import "fmt"

func linearSearch(nums []int, x int) int {
	for i := 0; i < len(nums); i++ {
		if nums[i] == x {
			return i
		}
	}

	return -1
}

func main() {
	nums := []int{2, 3, 4, 10, 40}
	x := 10

	fmt.Println("Element is present at index",linearSearch(nums, x))
}
