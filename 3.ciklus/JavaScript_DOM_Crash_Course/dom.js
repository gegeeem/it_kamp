//console.dir(document);
// const button = document.getElementById('button')
// .addEventListener('click',buttonClick)
// function buttonClick(e){
//     this.style.backgroundColor = 'red';
//     console.log(e);
// }

// const itemInput = document.querySelector('input[type="text"]');
// const form = docuemnt.querySelector('form');
// itemInput.addEventListener('keydown',runEvent);
// function runEvent(){

// }

const form = document.getElementById('addForm');
const item = document.getElementById('items');
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem); //dodaj novu stavku kad je 'submit' izvrsen





function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById('item');
    let newLi =document.createElement('li'); //kreiranje novog elementa li tj. u nasem slucaju stavke
    newLi.className='list-group-item'; //dodavanje klase kao sto imaju i ostale li
     newLi.textContent = newItem.value;
     item.appendChild(newLi);
     const deleteBtn = document.createElement('button');
     deleteBtn.classList = 'btn btn-danger btn-sm float-right delete';
     deleteBtn.textContent = 'X';
     newLi.appendChild(deleteBtn);
    newLi.addEventListener('click',deleteItem)
    console.log(newItem.value);
    console.log('item: ',item);
}

// brisanje stavke
const BtnsDelete = document.getElementsByClassName('delete');
for(el of BtnsDelete){
    el.addEventListener('click',deleteItem)
}
function deleteItem(e){
    let parent = e.target.parentElement;
     item.removeChild(parent);
    console.log(parent);
}
//pretrazivanje
filter.addEventListener('keyup',filterItems);

function filterItems(e){
    let search = e.target.value.toLowerCase();
    const liItems = item.getElementsByTagName('li');
    Array.from(liItems).forEach(function(el){
        itemName = el.firstChild.textContent.toLowerCase();
        console.log(itemName );
        if(itemName.indexOf(search) === -1){
            el.style.display = 'none';
        }else{
            el.style.display = 'block';
        }
    });

}
