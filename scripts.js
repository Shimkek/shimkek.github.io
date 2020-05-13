const fillTable = () => {
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    for (i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskNumberFunc = task.taskNumber;

        const taskStatus = document.createTextNode(task.taskStatus);
        const taskText = document.createTextNode(task.taskText);
        const taskTime = document.createTextNode(task.taskTime);

        const newStatus = document.createElement('td');
        const newTask = document.createElement('td');
        const newTimeStamp = document.createElement('td');
        const newDeleteButton = document.createElement('td');

        const row = document.createElement("tr");


        newStatus.appendChild(taskStatus);
        newTask.appendChild(taskText);
        newTimeStamp.appendChild(taskTime);
        newDeleteButton.innerHTML = '<button class="button is-danger is-outlined is-small" onclick = "deleteTask(' + taskNumberFunc + ')"><span class="icon"></span></button>';

        row.appendChild(newStatus);
        row.appendChild(newTask);
        row.appendChild(newTimeStamp);
        row.appendChild(newDeleteButton);
        row.setAttribute('id', taskNumberFunc);
        document.getElementById("todotablebody").appendChild(row);

    };
}

const deleteTask = (id) => {
    //   if (window.confirm("Are you sure?") === true) {
    document.getElementById(id).remove();
    var tasks = JSON.parse(window.localStorage.getItem('tasks'));
    for (i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.taskNumber === id) {
            tasks.splice(i, 1);
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
            break;
        };
    };
    //   }
}

const buttonScript = () => {
    window.localStorage.clear();
    window.localStorage.setItem('createdTasks', 0);
    window.localStorage.removeItem('tasks');
}


const twoNumberDate = (date) => {
    const string = new String(date);
    if (string.length === 1) {
        return '0' + date;
    }
    else {
        return date;
    }
}

const appendTextnode = (id, node) => {
    let textnode = document.createTextNode(node);
    document.getElementById(id).appendChild(textnode);
}
const convertMonthToName = (month) => {
    if (month === 1) {
        return "January";
    } else if (month === 2) {
        return "February";
    } else if (month === 3) {
        return "March";
    } else if (month === 4) {
        return "April";
    } else if (month === 5) {
        return "May";
    } else if (month === 6) {
        return "June";
    } else if (month === 7) {
        return "July";
    } else if (month === 8) {
        return "August";
    } else if (month === 9) {
        return "September";
    } else if (month === 10) {
        return "October";
    } else if (month === 11) {
        return "November";
    } else if (month === 12) {
        return "December";
    } else {
        return "error1"
    }
}

const timeNow = () => {
    const today = new Date();
    const date = twoNumberDate(today.getDate()) + '-' + convertMonthToName((today.getMonth() + 1)) + '-' + today.getFullYear();
    const time = twoNumberDate(today.getHours()) + ":" + twoNumberDate(today.getMinutes()) + ":" + twoNumberDate(today.getSeconds());
    const dateTime = time + ' ' + date;

    return dateTime;

}



const addTask = () => {
    if (inputBox.value !== "") {

        const inputBox = document.getElementById("inputBox");
        const taskText = document.createTextNode(inputBox.value);
        const row = document.createElement("tr");

        const newStatus = document.createElement('td');
        const newTask = document.createElement("td");
        const newTimeStamp = document.createElement("td");
        const newDeleteButton = document.createElement("td");

        var text = window.localStorage.getItem('createdTasks');
        var createdTasks = parseInt(text, 10);
        createdTasks++;
        window.localStorage.setItem('createdTasks', createdTasks);

        const statusValue = document.createTextNode('Not Completed');
        newStatus.appendChild(statusValue);
        newDeleteButton.innerHTML = '<button class="button is-danger is-outlined is-small" onclick = "deleteTask(' + createdTasks + ')"><span class="icon"></span></button>';
        newTask.appendChild(taskText);

        const timeStampValue = document.createTextNode(timeNow());
        newTimeStamp.appendChild(timeStampValue);

        row.appendChild(newStatus);
        row.appendChild(newTask);
        row.appendChild(newTimeStamp);
        row.appendChild(newDeleteButton);

        row.setAttribute('id', createdTasks);
        document.getElementById("todotablebody").appendChild(row);

        const task = {
            'taskNumber': createdTasks,
            'taskStatus': 'Not Completed',
            'taskText': inputBox.value,
            'taskTime': timeNow()
        };

        addTaskToLocalStorage(task);

        inputBox.value = "";

    }
}

const addTaskToLocalStorage = (task) => {
    var tasks = JSON.parse(window.localStorage.getItem('tasks'));

    if (tasks === null) {
        var tasks = [];
    };

    tasks.push(task);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
    //window.alert(tasks);
}
