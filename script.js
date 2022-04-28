const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
let tarefa;

function capTexto(event) {
  tarefa = textoTarefa.value;
}

textoTarefa.addEventListener('input', capTexto);

function addTarefa() {
  const createLi = document.createElement('li');
  createLi.innerText = tarefa;
  listaTarefas.appendChild(createLi);
  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', addTarefa);
