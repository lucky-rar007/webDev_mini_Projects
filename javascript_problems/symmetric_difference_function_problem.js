function diffArray(arr1,arr2){
  let result=[];
  let res1=(arr1.filter((element)=>!arr2.includes(element)));
  let res2=(arr2.filter((element)=>!arr1.includes(element)));

  result=[...res1,...res2]
  return result;
}