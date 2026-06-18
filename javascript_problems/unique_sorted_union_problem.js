function uniteUnique(...args){
  let result=[];
  for(let z of args){
    for(let i=0;i<z.length;i++){
      if(!(result.includes(z[i]))){
        result.push(z[i]);
      }
    }
  }
return result;
}