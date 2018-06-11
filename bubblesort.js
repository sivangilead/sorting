function bubbleSort(array) {

for (let i=0;i<array.length;i++) {
  for(let j=0;j<array.length-1;j++){
    console.log(i,j)
    console.log(array[j],array[j+1])
    console.log(compare(array[j],array[j+1]))
     if (compare(array[j],array[j+1])){
        swap(array,j)
        console.log(array)
     }
    }
  }
  return array
} /* your code here */



function swap(array,index){
    let temp=array[index+1]
    array[index+1]=array[index]
    array[index]=temp
}

function compare(num1,num2){
  if (num1>num2){
  return 1
  }
  else{
    return 0
  }
}
