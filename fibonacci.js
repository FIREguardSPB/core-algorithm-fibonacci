


function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}




  function fiboRecurs(n) {
    
    
    if (n <= 1){
      return n}
      { return fiboRecurs(n - 1) + fiboRecurs(n - 2)
        }
      }

console.log(fiboRecurs(20))
// return n <= 1 ? n : fiboRecurs(n - 1) + fiboRecurs(n - 2);}
// console.log(fiboRecurs(20))
