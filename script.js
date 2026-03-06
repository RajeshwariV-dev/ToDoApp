const input = document.getElementById("taskInput");
const ulList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Add Task
addBtn.addEventListener("click", function () {

    if (input.value.trim() === "") return;

    const dataList = document.createElement("li");
    dataList.innerText = input.value;

    dataList.classList.add("list-group-item");

    // Strike toggle
    dataList.addEventListener("click", function () {
        dataList.classList.toggle("completed");
    });

    ulList.appendChild(dataList);

    input.value = "";
});


// Delete struck tasks
deleteBtn.addEventListener("click", function () {

    const completedTasks = document.querySelectorAll(".completed");

    completedTasks.forEach(function(task){
        task.remove();
    });

});