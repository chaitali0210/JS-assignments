const addTask = document.querySelector('.addTask');
var input=document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        //create a div tag
        this.createDiv(itemName);

    }
    
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('input_item');
        input.type="text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editTask = document.createElement('button');
        editTask.innerHTML = 'EDIT';
        editTask.classList.add('editTask');

        let removeTask = document.createElement('button');
        removeTask.innerHTML='REMOVE';
        removeTask.classList.add('removeTask');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editTask);
        itemBox.appendChild(removeTask);

        editTask.addEventListener('click', () => this.edit(input));

        removeTask.addEventListener('click', () => this.remove(input));
        

    }

    edit(input){
        input.disabled = !input.disabled;
    }

    remove(item){
        container.removeChild(item);
    }
    
}
function check(){
    if(input.value != ''){
       new item(input.value); 
       input.value= "";
    }
}
addTask.addEventListener('click' , check);