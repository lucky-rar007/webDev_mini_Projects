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


/*
Another approach 

function confirmEnding(str, sub) {
    return str.includes(sub, str.length - sub.length);
}


*/