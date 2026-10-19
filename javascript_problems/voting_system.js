const poll=new Map();
function addOption(option){
    if(poll.has(option)){
        return `Option ${option} already exists.`;
    }else if(option==""){
        return `Option cannot be empty.`;
    }else{
        poll.set(option,new Set());
    }
}
