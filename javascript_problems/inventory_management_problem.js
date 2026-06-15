let inventory=[];

function findProductIndex(name){
  let search = name.toLowerCase();

  for(let i = 0; i < inventory.length; i++){
    if(inventory[i].name === search){
      return i;
    }
  }

  return -1;
}

function addProduct(prod){
  let name = prod.name.toLowerCase();
  let index = findProductIndex(name);

  if(index !== -1){
    inventory[index].quantity += prod.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: prod.quantity
    });
    console.log(`${name} added to inventory`);
  }
}
function removeProduct(name, quantity){
  let search = name.toLowerCase();
  let index = findProductIndex(search);

  if(index === -1){
    console.log(`${search} not found`);
    return;
  }

  let item = inventory[index];
  let diff = item.quantity - quantity;

  if(diff > 0){
    item.quantity -= quantity;
    console.log(`Remaining ${search} pieces: ${item.quantity}`);
  }
  else if(diff === 0){
    inventory.splice(index, 1);
  }
  else{
    console.log(`Not enough ${search} available, remaining pieces: ${item.quantity}`);
  }
}