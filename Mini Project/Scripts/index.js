const addTask = document.querySelector('.addTask');
var inputValue=document.querySelector('.input');
const container = document.querySelector('.container');

if(window.localStorage.getItem("todos") == undefined){
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}
var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

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



        editTask.addEventListener('click', () => this.editTask(input,itemName));

        removeTask.addEventListener('click', () =>this.removeTask(itemBox,itemName));
        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editTask);
        itemBox.appendChild(removeTask);
        

    }

    editTask(input,itemName){
        if(input.disabled == true){
            input.disabled = !input.disabled;
         }
        else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }
        
    

    removeTask(itemBox,itemName){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        
    }
    
}
function check(){
    if(inputValue.value != ''){
       new item(inputValue.value);
       todos.push(inputValue.value);
       window.localStorage.setItem("todos", JSON.stringify(todos)); 
       inputValue.value= "";
    }
}
addTask.addEventListener('click' , check);
window.addEventListener('keydown',(e)=> {
    if(e.which == 13){
        check();
    }
})
for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}

