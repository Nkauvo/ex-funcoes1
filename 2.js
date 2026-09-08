// Exercício 1
console.log("--- Exercício 1: Primo Simples ---");
function isPrime(n) {
  if (n <= 1) return false;

  // Variável local para contagem de divisores
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  // Um número primo possui exatamente 2 divisores (1 e ele mesmo)
  return count === 2;
}

const numbersToTest = [1, 2, 3, 4, 7, 10, 11, 13, 15, 29];
numbersToTest.forEach((num) => {
  console.log(`O número ${num} é primo?`, isPrime(num));
});

// Exercício 2
console.log("\n--- Exercício 2: Conversão de Temperatura ---");
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log("0°C em Fahrenheit:", toFahrenheit(0));
console.log("100°C em Fahrenheit:", toFahrenheit(100));
console.log("32°F em Celsius:", toCelsius(32));
console.log("212°F em Celsius:", toCelsius(212));

// Exercício 3
console.log("\n--- Exercício 3: Máximo em Array ---");
function getMax(arr) {
  if (!arr || arr.length === 0) return undefined;

  // Variável local para armazenar o valor máximo temporário
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Maior de [4, 12, 7, 25, 3]:", getMax([4, 12, 7, 25, 3]));
console.log("Maior de [-15, -3, -40]:", getMax([-15, -3, -40]));

// Exercício 4
console.log("\n--- Exercício 4: Média de Notas ---");
function average(scores) {
  // Variável local para somatório
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

const scores = [8, 7.5, 9, 10];
console.log("Notas:", scores);
console.log("Média calculada:", average(scores));

// Exercício 5
console.log("\n--- Exercício 5: Construção de Nome Completo ---");
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Miguel", "Soares"));
console.log(fullName("Felipe", "Goes"));
console.log(fullName("Guilherme", "Constantino"));

// Exercício 6
console.log("\n--- Exercício 6: Chamadas Encadeadas ---");
function double(n) {
  return n * 2;
}

function quadruple(n) {
  return double(double(n));
}

console.log("quadruple(3):", quadruple(3)); // (3 * 2) * 2 = 12
console.log("quadruple(5):", quadruple(5)); // (5 * 2) * 2 = 20

// Exercício 7
console.log("\n--- Exercício 7: Shadowing Médio ---");
// Variável global
globalThis.mode = "light";

function toggleMode(mode) {
  // O parâmetro 'mode' já faz o shadowing da variável global 'mode'.
  // Criamos uma variável local 'mode' invertendo o valor.
  // Usamos 'var' para declarar 'mode' localmente no escopo da função:
  var mode = mode === "light" ? "dark" : "light";

  console.log("Variável local 'mode':", mode);
  console.log("Variável global 'globalThis.mode':", globalThis.mode);

  return mode;
}

const novoModo = toggleMode("light");
console.log("Retorno de toggleMode('light'):", novoModo);
