const arr = [1, 2, 3, 4, 5]
let sum=0
for(let i=0;i<arr.length;i++){
  sum=sum+arr[i]
}
console.log("The sum of the array:",sum)

let large=arr[0]
for(let i=1;i<arr.length;i++){
  if(arr[i]>large)
    large=arr[i]
}
console.log("The largest number:",large)