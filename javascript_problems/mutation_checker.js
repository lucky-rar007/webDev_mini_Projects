function mutation(arr){
  let word1=arr[0].toLowerCase();
  let word2=arr[1].toLowerCase();
  for(let i=0;i<word2.length;i++){
    if (!(word1.includes(word2[i]))){
      return false;
    }
  
  }return true;
}

let arr=["hello","Hello"];
console.log(mutation(arr));