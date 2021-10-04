
//make life easier
const qs = selector => document.querySelector(selector);
const qsa = selector => document.querySelectorAll(selector);
const log = something => console.log(something);
const cre = element => document.createElement(element);

const list = qs('#list');
const okBtn = qs('#ok');
const resetBtn = qs('#reset');
const input = qs('#input');
const allListItems = qsa('.list_item')

const addListElem = () => {
    const listItem = cre('li')
    listItem.textContent = input.value;
    listItem.classList.add('list_item')
    list.append(listItem);
    input.value = ''
}
const inputFunc = () => {
    log(input.value)
}
const clearList = () => {
    list.textContent = '';
}
input.addEventListener('input', inputFunc)
okBtn.addEventListener('click', addListElem);
resetBtn.addEventListener('click', clearList)