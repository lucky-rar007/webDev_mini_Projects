function destroyer(arr,...arg){
  let del=[...arg];
  let result=arr.filter((elem)=>!(del.includes(elem)));
  return result;
}