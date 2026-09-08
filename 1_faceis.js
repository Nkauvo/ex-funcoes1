// Exercício 1
console.log("--- Exercício 1: Hello World ---");
function sayHello() {
  console.log("Hello, World!");
}

sayHello();

// Exercício 2
console.log("\n--- Exercício 2: Soma Simples ---");
function sum(a, b) {
  return a + b;
}

console.log("Resultado de sum(5, 7):", sum(5, 7));

// Exercício 3
console.log("\n--- Exercício 3: Variável Local ---");
function localExample() {
  let message = "Variável local";
  console.log("Dentro da função:", message);
}

localExample();

// Tentando acessar fora da função (usando try/catch para observar o erro sem interromper o script)
try {
  console.log(message);
} catch (error) {
  console.log("Erro ao acessar fora da função:", error.name + " - " + error.message);
}

// Exercício 4
console.log("\n--- Exercício 4: Saudação por Nome ---");
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Neymar");
greet("kant");
greet("Tavin");

// Exercício 5
console.log("\n--- Exercício 5: Área do Círculo ---");
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

console.log("Área do círculo de raio 2:", calculateArea(2));

// Exercício 6
console.log("\n--- Exercício 6: Data Atual ---");
function currentDate() {
  let today = new Date();
  console.log("Data e hora atual:", today);
}

currentDate();

// Exercício 7
console.log("\n--- Exercício 7: Shadowing Básico ---");
// Definindo no escopo global
globalThis.x = 10;

function shadowExample(x) {
  // 'x' aqui se refere ao parâmetro local, sombreando o 'x' global
  console.log("Parâmetro local x:", x);
  // 'globalThis.x' acessa explicitamente a variável global
  console.log("Variável global x:", globalThis.x);
}

shadowExample(20);
