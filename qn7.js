// Create a function that recieves an array and returns the smallest number from that array

function findSmallestNumber(arr) {
    const smallestNumber = Math.min(...arr);
      return smallestNumber;
    }
    const myArray = [9, 5, 6, 12, 18];
    const result = findSmallestNumber(myArray);
    console.log("Smallest number in the array:", result);