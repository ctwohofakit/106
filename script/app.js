function saveTask(){
    console.log("saving task");
    //get values
    
    const title=$("#txtTitle").val();
    const desc=$("#txtDescription").val();
    const color=$("#selColor").val();
    const date=$("#selDate").val();
    const status=$("#selStatus").val();
    const budget=$("#numBudget").val();
    console.log(title,desc,color,date,status,budget)

    //build an object
    let taskTosave= new Task(title,desc,color,date,status,budget);
    console.log(taskTosave);


    //save to srever


    //display the task
    displayTask(taskTosave);


    //deleteTask(taskTosave);

}

function displayTask(task){
    //display
    let syntax = `<div class="task">
    <h5>${task.title}</h5>
    <p>${task.description}</p>
        </div>
        <div><label>${task.color}</label></div>
        <div><label>${task.status}</label></div>
        <div><label>${task.date}</label>
        <label>${task.budget}</label></div>
        <button class="btn btn-danger" onclick="deleteTask()";>Delete</button>`
        ;
    $(".list").append(syntax);


    //table view display
    /*let table =`
    <table class="table table-sm table-light" id="displayTb">
    <thead class="thead-light">
        <tr>
            <td>${task.title}</td>
            <td>${task.desc}</td>
            <td>${task.color}</td>
            <td>${task.date}</td>
            <td>${task.status}</td>
            <td>${task.budget}</td>
            <td><button class="btn btn-danger" onclick="deleteTask()";>Delete</button></td>
        </tr>
    </thead>
    </table>
    `;
    $(".list").append(table);*/

}

/*
function deleteTask(task){
    $("#displayTb").remove;
}*/

function testRequest(){
    $.ajax({
    type: "get",
    url: "http://fsdiapi.azurewebsites.net",
    
    success: function(response){
        console.log(response);
    },
    error: function(error)
    { 
        console.log(error)
    }
    });
}


function init(){
    console.log("task manager");
    //load data

    //hook the events
    $("#btnSave").click(saveTask);

}

window.onload=init;