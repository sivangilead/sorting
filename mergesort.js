function split(wholeArray) {
  let midpoint=Math.floor(wholeArray.length/2)
  let firstHalf=wholeArray.slice(0,midpoint)
  let secondHalf=wholeArray.slice(midpoint,wholeArray.length)

  /* your code here to define the firstHalf and secondHalf arrays */

  return [firstHalf, secondHalf];
}

function merge(array1,array2,func){
  let merged=[]
  if (!func) func = compare; // if user didn't pass a function, then default to compare
  while ((array1.length!==0)&&(array2.length!==0)){
  if (func(array1[0], array2[0])){
    merged.push(array2[0])
    array2.shift()
  }
  else{
    merged.push(array1[0])
    array1.shift()
  }
  }
return merged.concat(array1).concat(array2)
}

function mergeSort(array, func) {
 if (array.length===1){
   return array
 }
let splitarr = split(array)
let firstarr = splitarr[0]
let secondarr = splitarr[1]

return merge(mergeSort(firstarr),mergeSort(secondarr), func)

}

function compare(num1,num2){
  if (num1>num2){
    return true
  }
  else{
    return false
  }
}
