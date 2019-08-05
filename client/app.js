
let taskList = document.getElementById("taskList")

function populateTasks() {

fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(json => displayTasks(json))

}

function displayTasks(tasks) {

    let taskItems = tasks.map(task => {
        return `<li>${task.name}</li>`
    })

    taskList.innerHTML = taskItems.join('')


    console.log(tasks)
}


populateTasks() 
