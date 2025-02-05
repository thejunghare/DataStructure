#include <iostream>

void merge(int nums[], int start, int mid, int end) {
  int n1 = mid - start + 1; //
  int n2 = end - mid;

  int leftArray[n1];
  int rightArray[n2];

  for (int i = 0; i < n1; i++) {
    leftArray[i] = nums[start + i];
  }

  for (int i = 0; i < n2; i++) {
    rightArray[i] = nums[mid + 1 + i];
  }

  int i = 0, j = 0, k = start;

  while (i < n1 && j < n2) {
    if (leftArray[i] <= rightArray[j]) {
      nums[k] = leftArray[i];
      i++;
    } else {
      nums[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    nums[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < n2) {
    nums[k] = rightArray[j];
    j++;
    k++;
  }
}

void sort(int nums[], int start, int end) {
  if (start < end) {
    int mid = (start + end )/ 2;

    sort(nums, start, mid);
    sort(nums, mid + 1, end); // +1
    merge(nums, start, mid, end);
  }
}

int main() {
  int nums[] = {2, 3, 1, 4};
  int length = sizeof(nums) / sizeof(nums[0]);

  sort(nums, 0, length - 1);

  for (int i = 0; i < length; i++) {
    std::cout << nums[i] << "\t";
  }
}
