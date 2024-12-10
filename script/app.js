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
    $.ajax({
        type:"POST",
        url:"http://fsdiapi.azurewebsites.net/api/tasks/", //end point that support the post
        data:JSON.stringify(taskTosave), //save to JASON, convery differnt program language to just text
        contentType: "application/json", //specify we are using JSON
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    });

    //display the task
    //displayTask(taskTosave);

    //deleteTask(taskTosave);

}

function displayTask(task){
    //display
    let syntax = `<div class="task">
    <h5>${task.title}</h5>
    <p>${task.desc}</p>
        </div>
        <div><label>${task.color}</label></div>
        <div><label>${task.status}</label></div>
        <div><label>${task.date}</label>
        <label>${task.budget}</label></div>
        <button class="btn btn-danger" onclick="deleteTask()";>Delete</button>`
        ;
    $(".list").append(syntax);

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


function loadTask(){
    $.ajax({
        type: "get",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(response){
            console.log(response);
            let data= JSON.parse(response);//converted back to javascript

            //search through key element matching for display fucntion, key element is in task.js
            // from the object returned, get only messages that were created by you
            // tip 1. Modify the class to include your user.
            // tip 2. use a for loop
            // tip 3. Then an if statement

            for (let i=0; i<data.length; i++){
                let task= data[i];
                if (task.name==="Kitic53"){
                    displayTask(task);
                }else{
                    console.log("user Not Found")
                }
            
            }
            console.log(data);

        }, 
        error: function(error)
        {
            console.log(error);
        }

    })
}





function init(){
    console.log("task manager");
    //load data

    loadTask();


    //hook the events
    $("#btnSave").click(saveTask);

}

window.onload=init;