let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});
// Rewrite forEach function with big arrow notation
a.forEach(element=>{
  console.log(element);
});
let c = [8, 17, 42, 99];
c.sort(function(a, b) { return a - b; });
c.forEach(element=>{
  console.log(element);
});
