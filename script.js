const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
let tarefa;

function capTexto() {
  tarefa = textoTarefa.value;
}

textoTarefa.addEventListener('input', capTexto);

function addTarefa() {
  const createLi = document.createElement('li');
  createLi.innerText = tarefa;
  createLi.className = 'tarefas';
  listaTarefas.appendChild(createLi);
  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', addTarefa);

function listSelect(event) {
  const liTarefas = document.querySelectorAll('li.tarefas');
  for (let i = 0; i < liTarefas.length; i += 1) {
    liTarefas[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

listaTarefas.addEventListener('click', listSelect);
