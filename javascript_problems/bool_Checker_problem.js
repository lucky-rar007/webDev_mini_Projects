function booWho(arg) {
  return typeof arg === "boolean";
}
booWho(true);      
booWho(false);  
booWho("false");   
booWho(0);         
booWho([]);       