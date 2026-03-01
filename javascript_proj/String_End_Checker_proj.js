function confirmEnding(str,check){
    if (str.length>=check.length && str.slice(str.length-check.length)==check){
        return true;
    }
    else{
        return false;
    }
}
let str="Hello World";
let check="World";
console.log(confirmEnding(str,check));