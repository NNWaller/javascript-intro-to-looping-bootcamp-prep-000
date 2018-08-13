function forLoop (array) {
 for (let i = 0; i < 25; i++) {
   if (i === 1){
     console.log ("I am 1 strange loop.");
   } else { 
     console.log(`I am ${i} strange loops.`);
   }
 }
}


let n = 37;
function whileLoop (n){
  while (n > 0) {
   console.log(--n);
  }
  if (n === 0){
    return "done";
  }

}