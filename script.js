const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
let tarefa;
const btnLimpa = document.getElementById('apaga-tudo');
const btkRemoveOk = document.getElementById('remover-finalizados');

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

// https://www.w3schools.com/jsref/met_element_matches.asp
function dblClick(event) {
  if (event.target.matches('li.completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

listaTarefas.addEventListener('dblclick', dblClick);

// https://www.w3schools.com/js/js_loop_while.asp
function clear() {
  while (listaTarefas.hasChildNodes()) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}

btnLimpa.addEventListener('click', clear);

function removeOk() {
  const liCompleted = document.querySelectorAll('li.completed');
  for (let i = 0; i < liCompleted.length; i += 1) {
    listaTarefas.removeChild(liCompleted[i]);
  }
}
btkRemoveOk.addEventListener('click', removeOk);
