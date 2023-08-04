package main

import "fmt"

func binarySearch(nums []int, target int) int {
	start := 0
	end := len(nums) - 1

	for start <= end {
		mid := (start + end) / 2
		if nums[mid] < target {
			start = mid + 1
		} else if nums[mid] > target {
			end = mid - 1
		} else {
			return mid
		}
	}

	return -1
}

func main() {
	nums := []int{10, 12, 24, 29, 39, 40, 51, 56, 69}
	target := 10
	fmt.Print(binarySearch(nums, target))
}
