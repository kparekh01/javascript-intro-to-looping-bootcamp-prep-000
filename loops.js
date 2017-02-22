function forLoop(array){
  for (var i=0; i<25; i++){
  (i == 1)? array.push("I am 1 strange loop.") : array.push(`I am ${i} strange loops.`)
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    console.log(n);
	  n -- ;
  }
  return "done";
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do{
    array.splice(0, 1); // delete will delete the element in array but still return undefined in place of element 
  }
  while(array.length > 0 && maybeTrue());
  return array;
}
