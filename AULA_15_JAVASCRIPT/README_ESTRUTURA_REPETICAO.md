# Estruturas de Repetição em JavaScript

## O que são Estruturas de Repetição?

As **Estruturas de Repetição** permitem executar um mesmo bloco de código **várias vezes**, enquanto uma condição for verdadeira ou enquanto houver itens para percorrer.

Em JavaScript, elas são muito usadas para:

* Percorrer arrays
* Repetir cálculos
* Trabalhar com listas de dados
* Renderizar informações no React

---

## for

O `for` é usado quando sabemos **quantas vezes** o código deve ser executado.

### Sintaxe

```javascript
for (inicialização; condição; incremento) {
  // código a ser executado
}
```

### Exemplo

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Resultado:

```
0
1
2
3
4
```

---

## for...of

O `for...of` é usado para percorrer **valores** de arrays.

### Exemplo

```javascript
const frutas = ["Maçã", "Banana", "Laranja"];

for (const fruta of frutas) {
  console.log(fruta);
}
```

---

## for...in

O `for...in` percorre os **índices** (ou chaves) de um array ou objeto.

### Exemplo com array

```javascript
const frutas = ["Maçã", "Banana", "Laranja"];

for (const index in frutas) {
  console.log(index, frutas[index]);
}
```

### Exemplo com objeto

```javascript
const pessoa = {
  nome: "João",
  idade: 30
};

for (const chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
```

---

## while

O `while` executa o código **enquanto a condição for verdadeira**.

### Exemplo

```javascript
let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
}
```

---

## do...while

O `do...while` executa o código **pelo menos uma vez**, mesmo que a condição seja falsa.

### Exemplo

```javascript
let numero = 5;

do {
  console.log(numero);
  numero++;
} while (numero < 3);
```

---

## Métodos de repetição com Arrays

Além dos laços tradicionais, JavaScript possui métodos próprios para repetição.

### forEach()

Executa uma função para cada item do array.

```javascript
const numeros = [1, 2, 3];

numeros.forEach(numero => {
  console.log(numero);
});
```

---

### map()

Percorre o array e cria um **novo array** transformado.

```javascript
const numeros = [1, 2, 3];

const dobrados = numeros.map(n => n * 2);
// [2, 4, 6]
```

---

### filter()

Retorna um novo array com os itens que atendem a uma condição.

```javascript
const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter(n => n % 2 === 0);
// [2, 4]
```

---

## Estruturas de repetição no React

No React, a repetição mais comum é feita com `map()`.

```jsx
{usuarios.map(usuario => (
  <li key={usuario.id}>{usuario.nome}</li>
))}
```

---

## Resumo

* `for` → quando sabemos a quantidade de repetições
* `for...of` → percorre valores de arrays
* `for...in` → percorre índices ou chaves
* `while` → repete enquanto a condição for verdadeira
* `do...while` → executa pelo menos uma vez
* `forEach`, `map`, `filter` → muito usados com arrays e no React

---

📌 **Dica:** Escolher a estrutura correta deixa o código mais limpo e fácil de entender.
