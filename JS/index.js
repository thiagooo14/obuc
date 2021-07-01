const arrLocaisTrabalho = [
  { prédio: 'Prédio 1', local: 'Local de Trabalho 1' },
  { prédio: 'Prédio 2', local: 'Local de Trabalho 2' },
  { prédio: 'Prédio 3', local: 'Local de Trabalho 3' },
  { prédio: 'Prédio 4', local: 'Local de Trabalho 4' },
  { prédio: 'Prédio 5', local: 'Local de Trabalho 5' },
];

const list = document.getElementById('list');
const creat = document.getElementById('creat');
const build = document.getElementById('build');
const workPlace = document.getElementById('workPlace');

const render = (itn) => {
  list.innerHTML = '';
  let index = 0;
  arrLocaisTrabalho.forEach((location) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const edit = document.createElement('button');
    const delet = document.createElement('button');
    const editImg = document.createElement('img');
    const deletImg = document.createElement('img');
    td.innerHTML = location.prédio;
    td2.innerHTML = location.local;
    tr.className = 'listIten';
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.id = index;
    
    editImg.src = '/image/pen.png';
    editImg.alt = 'image edit';
    editImg.className = 'btnList';
    deletImg.src = '/image/trash.png';
    deletImg.alt = 'image delet';
    deletImg.className = 'btnList';
    index += 1;

    edit.appendChild(editImg);
    delet.appendChild(deletImg);

    td3.appendChild(edit);
    td3.appendChild(delet);
    tr.appendChild(td3);

    list.appendChild(tr);
  });
};
const addList = () => {
  arrLocaisTrabalho.push({ prédio: build.value, local: workPlace.value });
  console.log(arrLocaisTrabalho);
  sessionStorage.setItem('arr', JSON.stringify(arrLocaisTrabalho));
  render();
};

creat.addEventListener('click', addList);
window.onload(render());
