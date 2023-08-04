package main

import "fmt"

func mergesort(nums []int) ([]int) {
	if len(nums) <= 1 {
		return nums
	}

	mid := len(nums) / 2
	left := mergesort(nums[:mid])
	// right := mergesort(nums[mid:])

	return mergesort(left)
}

func main() {
	nums := []int{12, 31, 26, 8, 32, 17, 40, 42}
	fmt.Println(mergesort(nums))
}
