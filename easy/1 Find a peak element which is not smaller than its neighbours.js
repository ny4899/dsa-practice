/*
Question: Find a peak element which is not smaller than its neighbours

Input: array[]= {5, 10, 20, 15}
Output: 20
Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

link: https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/
*/

// My Solution

const arr = [1, 2, 3, 4, 5, 100, 100, 493, 999, 1000];

const findPeakEle = (arr) => {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];

  const l = arr.length;
  let ele;
  for (let i = 0; i <= l - 2; i++) {
    const a = arr[i];
    const b = arr[i + 1];
    if (a >= b) {
      ele = b;
      break;
    }
    if (i === l - 2) {
      ele = b;
    }
  }

  return ele;
};

console.log(findPeakEle(arr));

// GFG Solution

/*
<script>
	// A JavaScript program to find a peak element

	// Find the peak element in the array
	function findPeak(arr, n)
	{
	
		// first or last element is peak element
		if (n == 1) return 0;
		if (arr[0] >= arr[1]) return 0;
		if (arr[n - 1] >= arr[n - 2]) return n - 1;

		// check for every other element
		for (var i = 1; i < n - 1; i++) 
		{
		
		// check if the neighbors are smaller
		if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
		}
	}

	// Driver Code
	var arr = [1, 3, 20, 4, 1, 0];
	var n = arr.length;
	document.write("Index of a peak point is " + findPeak(arr, n));
	
	// This code is contributed by rdtank.
	</script>

*/