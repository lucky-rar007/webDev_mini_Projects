let input=document.getElementById("text-input");
let charCount=document.getElementById("char-count");

input.addEventListener("input",function(e){

    if (e.target.value.length >= 50) {
        e.target.value = e.target.value.slice(0, 50);
        charCount.style.color="red";
    }else{
        charCount.style.color="white";

    }

    let count=e.target.value.length;
    charCount.innerText="Character Count: "+count+"/50";


})
