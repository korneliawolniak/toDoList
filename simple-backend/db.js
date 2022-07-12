module.exports = {
    users: [
        { login: "test", password: "12345" },
        { login: "kornela@wolniak.com", password: "sheldon" },
    ],
    tasks: [{
            login: "test",
            todos: {
                toDoArray: [{ id: "1", description: "Go shoping!", status: "To do" }],
                inProgressTasksArray: [],
                doneTasksArray: [
                    { id: "2", description: "Clean room!", status: "Done" },
                ],
            },
        },
        {
            login: "kornela@wolniak.com",
            todos: {
                toDoArray: [{ id: "5", description: "Test task!", status: "To do" }],
                inProgressTasksArray: [{
                    id: "7",
                    description: "Test 1 !",
                    status: "In progress",
                }, ],
                doneTasksArray: [{ id: "6", description: "Test 2 !", status: "Done" }],
            },
        },
    ],
};