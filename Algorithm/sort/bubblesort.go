package main

import "fmt"

func bubbleSort(nums []int) []int {
	var temp int
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] > nums[i+1] {
			temp = nums[i]
			nums[i] = nums[i+1]
			nums[i+1] = temp
			i = -1
		}
	}

	return nums
}

func main() {
	nums := []int{13, 32, 26, 35, 10}
	fmt.Print(bubbleSort(nums))
}
