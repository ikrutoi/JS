const array = [5, 7, [4, [2], 8, [1, 3], ,2], [9, []], 1, 8];
let sum = 0;

function treeSum(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == undefined) {
      arr[i] = 0;
    }
    else 
      if (!arr[i].length)
        sum += +arr[i];
      else treeSum(arr[i]);
}

treeSum(array);

console.log(sum);