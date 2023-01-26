    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
        // .then( () => populateTodos())
        // .then( () => logTodos())
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {

        for(let i = 0; i < arrayOfTodos.length; i++) {
    
            let todoList = document.getElementById('todo-list');

            let todoItem = document.createElement('LI');

            let todoTitle = document.createTextNode(arrayOfTodos[i].title);

            todoItem.appendChild(todoTitle);
            todoList.appendChild(todoItem);
        }
    }

    // const populateTodos2 = () => {
    //     let todoSection = document.getElementById('container');

    //     let tdTitle = document.createTextNode(arrayOfTodos[0].title);
    //     let tdComplete = document.createTextNode(arrayOfTodos[0].completed);

    //     let tdLine = `Title: ${tdTitle} status is ${tdComplete}`;

    //     let todoP = document.createElement('P');

    //     todoP.appendChild(tdLine);

    //     todoSection.innerHTML(tdLine);
    // }

    const getByUser = () => {

        clearTodos();

        const numInput = document.getElementById('num-input').valueAsNumber

        const filteredArray = arrayOfTodos.filter((arr) => arr.userId === numInput && arr.completed == false)

        // console.log(filteredArray)

        for(let i = 0; i < filteredArray.length; i++) {
    
            let todoList = document.getElementById('todo-list');

            let todoItem = document.createElement('LI');

            let todoTitle = document.createTextNode(filteredArray[i].userId + " " +filteredArray[i].title);

            todoItem.appendChild(todoTitle);
            todoList.appendChild(todoItem);
        }
    }

    const clearTodos = () => {

        let todos = document.getElementsByTagName("OL")
        for (i=0; i < todos.length; i++) {
        console.log(todos[i].id)
        todos[i].innerHTML = null
        }
    }

    // (response) => {
    //     response.json()
    // }

    // DONE Using the assignment from yesterday, create a branch called: " Todo-Filtering ".
    // DONE Fetch the same data.
    // DONE Store the data in a variable.
    // DONE Add an input for the userID. This input should only take in a number from 1 - 10.
    // DONE Add a button that when clicked will:
    // DONE clear the previous todos from the view
    // and populate it with only todos with the userID that matches the number inputted.
    // then stores the currently filtered todos in a variable so that ...
    // You can create two more buttons that when clicked:

    // removes those todos from the view
    // and shows only todos that are either:
    // completed
    // not completed