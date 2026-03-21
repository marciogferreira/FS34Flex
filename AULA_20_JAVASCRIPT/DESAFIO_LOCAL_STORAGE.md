
# 🚀 Desafio: CRUD de Lista de Tasks com LocalStorage

## 🎯 Objetivo

Seu desafio é construir uma aplicação de **lista de tarefas (To-Do List)** utilizando apenas:

* HTML
* CSS
* JavaScript (puro, sem frameworks)

E o mais importante: **persistindo os dados com `localStorage`**.

---

## 🧠 O Desafio

Você deve implementar um sistema completo de CRUD:

* ✅ **Create**: adicionar novas tarefas
* 📋 **Read**: listar tarefas salvas
* ✏️ **Update**: editar tarefas existentes
* ❌ **Delete**: remover tarefas

Tudo isso garantindo que os dados **permaneçam salvos mesmo após recarregar a página**.

---

## 📦 Requisitos

### Funcionalidades obrigatórias

* [ ] Adicionar uma nova tarefa
* [ ] Listar todas as tarefas
* [ ] Editar o texto de uma tarefa
* [ ] Deletar uma tarefa
* [ ] Marcar tarefa como concluída
* [ ] Persistir dados no `localStorage`

---

### 💾 Regras de persistência

* As tarefas devem ser armazenadas no `localStorage`
* Ao carregar a página, os dados devem ser recuperados automaticamente
* Utilize `JSON.stringify` e `JSON.parse`

---

## 🧩 Estrutura sugerida de dados

```js
{
  id: 1,
  texto: "Estudar JavaScript",
  concluida: false
}
```

---

## 🖥️ Interface (mínimo esperado)

* Campo de input para nova tarefa
* Botão para adicionar
* Lista de tarefas
* Botões de editar e excluir
* Indicador visual de tarefa concluída

---

## 🔥 Desafios extras (opcional)

Se quiser ir além:

* [ ] Filtro (todas / concluídas / pendentes)
* [ ] Contador de tarefas
* [ ] Drag and drop para reordenar
* [ ] Dark mode 🌙
* [ ] Animações ao adicionar/remover tarefas
* [ ] Validação (não permitir tarefas vazias)

---

## ⚠️ Regras

* ❌ Não usar frameworks (React, Vue, etc.)
* ❌ Não usar bibliotecas externas
* ✅ Código organizado e legível
* ✅ Separação de responsabilidades (HTML, CSS, JS)

---

## 🏁 Entrega

Seu projeto deve conter:

* Arquivo `index.html`
* Arquivo `style.css`
* Arquivo `script.js`
* Código funcional rodando no navegador

---

## 💡 Dica

Pense na aplicação como um pequeno sistema real. Organize seu código, crie funções reutilizáveis e mantenha tudo limpo.

---

## 🧪 Critérios de avaliação

* Funcionalidade completa do CRUD
* Uso correto do `localStorage`
* Qualidade do código
* Experiência do usuário

---

## 🏆 Boa sorte!
