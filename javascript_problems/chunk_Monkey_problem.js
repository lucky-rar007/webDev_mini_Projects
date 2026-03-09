function chunkArrayInGroups(arr,size){
  let result=[];
  let chunk=[]; 
  for(let i=0;i<arr.length;i+=size){ 
    for(let j=i;j < i + size && j < arr.length;j++)
    {chunk.push(arr[j]);}
    result.push(chunk);
    chunk=[];
   }
   return result;
}
let arr=[1,2,3,4,5,6,7,8];
let size=3;
console.log(chunkArrayInGroups(arr,size));