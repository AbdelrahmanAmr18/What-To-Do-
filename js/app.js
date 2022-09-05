let input = document.getElementById('inputData');
let addBtn = document.getElementById('addBtn');
let allTasks = document.getElementById('allTasks');
let noTask = document.getElementById('noTask');

let addNewTask = ()=>{
    let data = input.value;

    if ( ( data.trim()  == '' ) || ( data.length )< 3 || ( data.length > 20 ))
    {
        alert('please enter something');
    }
    else{
        allTasks.innerHTML += 
        `
        <div class="alert alert-info"> ${data} 
        <button class="btn btn-danger delete float-right" style="margin: -6px">delete</button>
        </div>
        `
        noTask.classList.add('none');
        input.value='';
    }
};
    
    // let newDiv = document.createElement('div');
    // newDiv.classList.add('alert');
    // newDiv.classList.add('alert-info');
    // newDiv.append(data);
    // allTasks.append(newDiv);

addBtn.addEventListener('click', addNewTask);

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        console.log(e.target);
        e.target.parentElement.remove();
    }
});