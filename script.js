const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
let tarefa;
const btnLimpa = document.getElementById('apaga-tudo');
const btkRemoveOk = document.getElementById('remover-finalizados');
const btnSave = document.getElementById('salvar-tarefas');

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
  localStorage.clear();
}

btnLimpa.addEventListener('click', clear);

function removeCompletedInStorage(task) {
  const saved = JSON.parse(localStorage.getItem('savedList'));
  if (saved) {
    const newSaved = saved.filter((item) => !Object.keys(item).includes(task));
    localStorage.setItem('savedList', JSON.stringify(newSaved));
  }
}

function removeOk() {
  const liCompleted = document.querySelectorAll('li.completed');
  for (let i = 0; i < liCompleted.length; i += 1) {
    const completed = liCompleted[i].innerHTML;
    removeCompletedInStorage(completed);
    listaTarefas.removeChild(liCompleted[i]);
  }
}
btkRemoveOk.addEventListener('click', removeOk);

function saveButton() {
  const tarefas = document.querySelectorAll('li.tarefas');
  // const tarefasToSave = Object.values(tarefas).map((item) => item.innerHTML);
  // const finished = Object.values(tarefas).map((item) => item.classList.value);
  const finished = Object.values(tarefas).map((item) => {
    const itemtarefa = item.innerHTML;
    const itemClass = item.classList.value.includes('completed');
    return { [itemtarefa]: itemClass };
  });
  localStorage.setItem('savedList', JSON.stringify(finished));
}
btnSave.addEventListener('click', saveButton);

function addTarefaSaved(taskItem, bool) {
  const createLi = document.createElement('li');
  createLi.innerText = taskItem;
  if (bool.includes(true)) {
    createLi.className = 'tarefas completed';
  } else {
    createLi.className = 'tarefas';
  }
  listaTarefas.appendChild(createLi);
}

function recoverSaved() {
  const saved = JSON.parse(localStorage.getItem('savedList'));
  if (saved) {
    saved.map((object) =>
      addTarefaSaved(Object.keys(object), Object.values(object)));
  }
}

window.onload = () => {
  recoverSaved();
};
