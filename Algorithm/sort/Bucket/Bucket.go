package main

import "fmt"

func bucketsort(nums []int) []int {
	maxval := 0 // Store the highest val of array

	// find the highest val of array
	for _, val := range nums {
		if val > maxval {
			maxval = val
		}
	}

	// Create bucket
	buckets := make([][]int, maxval+1)
	for i := range buckets {
		buckets[i] = make([]int, 0)
	}

	for _, val := range nums {
		buckets[val] = append(buckets[val], val)
	}

	result := make([]int, 0)
	for _, bucket := range buckets{
		result = append(result, bucket...)
	}



	return result
}

func main() {
	nums := []int{13,32,26,35,10}
	fmt.Println(bucketsort(nums))
}
