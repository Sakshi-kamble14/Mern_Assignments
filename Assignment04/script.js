
function addTask(){
    const newtask=document.createElement('li')
    const taskList=document.getElementById('taskList')
    taskList.appendChild(newtask)
    newtask.textContent=document.getElementById('inputTask').value
    document.getElementById('inputTask').value=""
    deleteTask(newtask)
}
function deleteTask(newtask){
    const deleteBtn=document.createElement('button')
    deleteBtn.textContent = "Delete"
    newtask.appendChild(deleteBtn)
    deleteBtn.onclick=function (){
        newtask.remove()
    }
}
