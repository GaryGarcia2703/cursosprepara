const numeros = [5, 12, 3, 26, 8];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log("O maior número é:", maiorNumero);