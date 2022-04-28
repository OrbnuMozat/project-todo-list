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
  createLi.innerHTML = tarefa;
  createLi.className = 'tarefas';
  listaTarefas.appendChild(createLi);
  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', addTarefa);

function listSelect(event) {
  // const list = document.querySelectorAll('.tarefas');
  // for (let i = 0; i < list.length; i += 1) {
  //   // list.className.remove('selected');
  // }
  event.target.classList.add('selected');
}
const liTarefas = document.querySelectorAll('.tarefas');

liTarefas.forEach((item) => {
  item.addEventListener('click', listSelect);
});
