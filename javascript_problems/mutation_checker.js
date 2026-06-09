function mutation(arr){
  let first=arr[0].toLowerCase().split("");
  let sec=arr[1].toLowerCase().split("");
  if(first.length!=sec.length){
    return false;
  }
  let comp=sec.length;
  for(let i=0;i<first.length;i++){
    if(first.includes(sec[i])){
      comp--;
    }
  }
  return comp==0? true : false ;
}