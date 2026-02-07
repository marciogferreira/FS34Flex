# Vetores (Arrays) em JavaScript

## O que são Vetores (Arrays)?

Em JavaScript, **Vetores**, também chamados de **Arrays**, são estruturas de dados que permitem armazenar **vários valores dentro de uma única variável**.

Cada valor dentro do array possui um **índice**, que começa sempre em **0**.

---

## Exemplo básico

```javascript
const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Laranja
```

👉 `frutas[0]` acessa o primeiro item do array.

---

## Índice e Valor

| Índice | Valor   |
| ------ | ------- |
| 0      | Maçã    |
| 1      | Banana  |
| 2      | Laranja |

---

## Funções básicas de Arrays

### push()

Adiciona um item **no final** do array.

```javascript
const numeros = [1, 2, 3];

numeros.push(4);
// Resultado: [1, 2, 3, 4]
```

---

### pop()

Remove o **último** item do array.

```javascript
const numeros = [1, 2, 3];

numeros.pop();
// Resultado: [1, 2]
```

---

### unshift()

Adiciona um item **no início** do array.

```javascript
const nomes = ["João", "Pedro"];

nomes.unshift("Ana");
// Resultado: ["Ana", "João", "Pedro"]
```

---

### shift()

Remove o **primeiro** item do array.

```javascript
const nomes = ["Ana", "João", "Pedro"];

nomes.shift();
// Resultado: ["João", "Pedro"]
```

---

### length

Retorna a **quantidade de itens** dentro do array.

```javascript
const cores = ["Azul", "Verde", "Vermelho"];

console.log(cores.length); // 3
```

---

### map()

Percorre o array e cria um **novo array**, transformando cada item.

Muito usado no **React** para renderizar listas.

```javascript
const numeros = [1, 2, 3];

const dobrados = numeros.map(numero => numero * 2);
// Resultado: [2, 4, 6]
```

---

### filter()

Cria um novo array apenas com os itens que atendem a uma condição.

```javascript
const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter(numero => numero % 2 === 0);
// Resultado: [2, 4]
```

---

### find()

Retorna o **primeiro item** que satisfaz uma condição.

```javascript
const numeros = [5, 8, 12, 20];

const maiorQue10 = numeros.find(numero => numero > 10);
// Resultado: 12
```

---

## Arrays no React

No React, arrays são muito utilizados para:

* Renderizar listas
* Exibir tabelas
* Trabalhar com dados de APIs

Exemplo simples:

```jsx
{frutas.map((fruta, index) => (
  <li key={index}>{fruta}</li>
))}
```

---

## Resumo

* Arrays armazenam vários valores em uma única variável
* O índice começa em 0
* Existem funções para adicionar, remover e manipular dados
* `map`, `filter` e `find` são muito usados em aplicações React

---

📌 **Dica:** Dominar arrays é essencial para evoluir em JavaScript e React.
