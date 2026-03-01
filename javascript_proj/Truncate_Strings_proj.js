function truncateString(str,num){
    if(str.length>num){
        return str.slice(0,num)+"...";
    }
    else{
        return str;
    }
}
let txt="Hello World";
let num=10;
console.log(truncateString(txt,num));