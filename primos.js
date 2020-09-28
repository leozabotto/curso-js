let num = 2
function verificarPrimo (numero) {
  let divisor = numero - 1
  let primo = true

  while (divisor >= 2 && primo == true) {
    if (numero % divisor == 0) {
      primo = false
    }
    divisor--
  }

  return primo
}

for (let i = 0; i <= 100; i++) {
  let primo = false
  while (!primo) {
    if(verificarPrimo(num)) {
      primo = true
      console.log(num)
    }
    num++
  }
}
