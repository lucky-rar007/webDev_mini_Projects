function convertHTML(str){
  let result="";
  for(let i=0;i<str.length;i++){
    switch(str[i]){
      case "&":{
        result+="&amp;";
        break;
      }
      case "<":{
        result+="&lt;";
        break;
      }
      case ">":{
        result+="&gt;";
        break;
      }      
      case `"`:{
        result+="&quot;";
        break;
      }      
      case "'":{
        result+="&apos;";
        break;
      }
      default:{
        result+=str[i];
        break;
      }
      
      }
  }
  return result;
}