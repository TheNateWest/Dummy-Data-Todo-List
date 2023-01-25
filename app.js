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
        .then( () => populateTodos())
        .then( () => logTodos())
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

    const populateTodos2 = () => {
        let todoSection = document.getElementById('container');

        let tdTitle = document.createTextNode(arrayOfTodos[0].title);
        let tdComplete = document.createTextNode(arrayOfTodos[0].completed);

        let tdLine = `Title: ${tdTitle} status is ${tdComplete}`;

        let todoP = document.createElement('P');

        todoP.appendChild(tdLine);

        todoSection.innerHTML(tdLine);
    }

    // (response) => {
    //     response.json()
    // }