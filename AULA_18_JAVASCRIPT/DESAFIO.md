Aqui está um **exemplo de JSON com 10 pessoas** em JavaScript e depois um **desafio para os alunos**.

## JSON de Pessoas (JS)

```javascript
const pessoas = [
  {
    id: 1,
    nome: "João Silva",
    idade: 25,
    cpf: "111.111.111-11",
    email: "joao@gmail.com",
    whatsapp: "85999990001"
  },
  {
    id: 2,
    nome: "Maria Souza",
    idade: 30,
    cpf: "222.222.222-22",
    email: "maria@gmail.com",
    whatsapp: "85999990002"
  },
  {
    id: 3,
    nome: "Pedro Santos",
    idade: 28,
    cpf: "333.333.333-33",
    email: "pedro@gmail.com",
    whatsapp: "85999990003"
  },
  {
    id: 4,
    nome: "Ana Oliveira",
    idade: 22,
    cpf: "444.444.444-44",
    email: "ana@gmail.com",
    whatsapp: "85999990004"
  },
  {
    id: 5,
    nome: "Carlos Lima",
    idade: 35,
    cpf: "555.555.555-55",
    email: "carlos@gmail.com",
    whatsapp: "85999990005"
  },
  {
    id: 6,
    nome: "Juliana Costa",
    idade: 27,
    cpf: "666.666.666-66",
    email: "juliana@gmail.com",
    whatsapp: "85999990006"
  },
  {
    id: 7,
    nome: "Rafael Alves",
    idade: 40,
    cpf: "777.777.777-77",
    email: "rafael@gmail.com",
    whatsapp: "85999990007"
  },
  {
    id: 8,
    nome: "Fernanda Rocha",
    idade: 29,
    cpf: "888.888.888-88",
    email: "fernanda@gmail.com",
    whatsapp: "85999990008"
  },
  {
    id: 9,
    nome: "Lucas Pereira",
    idade: 33,
    cpf: "999.999.999-99",
    email: "lucas@gmail.com",
    whatsapp: "85999990009"
  },
  {
    id: 10,
    nome: "Beatriz Martins",
    idade: 26,
    cpf: "000.000.000-00",
    email: "beatriz@gmail.com",
    whatsapp: "85999990010"
  }
];
```

---

# 🧠 Desafio para os Alunos — Listagem e Filtro

## Objetivo

Criar uma **página em HTML + JavaScript** que exiba os dados do JSON em uma **tabela**, permitindo **filtrar pessoas** e mostrar **quantidade total de registros**.

---

## Requisitos

### 1️⃣ Criar uma tabela com as colunas

* ID
* Nome
* Idade
* CPF
* Email
* WhatsApp

---

### 2️⃣ Listar os dados do JSON na tabela

Usar **JavaScript** para percorrer o array `pessoas` e montar as linhas da tabela.

Sugestões de funções JS:

* `forEach`
* `map`
* `innerHTML`

---

### 3️⃣ Criar um campo de filtro

Acima da tabela deve existir um campo:

```
[ Digite para buscar... ]
```

O campo deve permitir buscar por:

* Nome
* Email
* CPF

Dica de funções JS:

* `toLowerCase()`
* `includes()`
* `filter()`

---

### 4️⃣ Criar um totalizador

Abaixo da tabela mostrar:

```
Total de Pessoas: X
```

Esse valor deve:

* mudar quando houver filtro
* mostrar quantas pessoas estão sendo exibidas

---

## Exemplo visual esperado

```
Buscar: [ Maria                ]

--------------------------------------------------------
ID | Nome          | Idade | CPF            | Email
--------------------------------------------------------
2  | Maria Souza   | 30    | 222.222.222-22 | maria@gmail.com
--------------------------------------------------------

Total de Pessoas: 1
```

---

## ⭐ Desafio EXTRA (para quem terminar primeiro)

1️⃣ Destacar o texto pesquisado.
2️⃣ Permitir **ordenar a tabela por nome**.
3️⃣ Adicionar **botão limpar filtro**.
4️⃣ Mostrar **"Nenhum resultado encontrado"** quando não houver resultados.
