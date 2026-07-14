function translatePigLatin(str){
  if (str.match(/^[aeiou]/)) {
    return str + "way";
  }else if (str.match(/^([^aeiou]+)(.*)/)) {
    return str.replace(/^([^aeiou]+)(.*)/,(match,group1,group2)=>{
    return group2+group1+"ay"
    })}else if(str.match(/[^aeiou]/)){
      return str.replace(/[^aeiou]/,()=>{
        return match+"ay"
      })
    }
  }


console.log(translatePigLatin("calgorithm"))