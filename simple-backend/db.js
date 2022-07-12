module.exports = {
    users: [
        { login: "kacper@obal.com", password: "sheldon" },
        { login: "kornela@wolniak.com", password: "sheldon" },
    ],
    tasks: [{
            login: "kacper@obal.com",
            todos: {
                toDoArray: [
                    { id: "1", description: "Default ToDo kacper", status: "To do" },
                ],
                inProgressTasksArray: [],
                doneTasksArray: [
                    { id: "2", description: "Default Done1 kacper", status: "Done" },
                    { id: "3", description: "Default Done2 kacper", status: "Done" },
                ],
            },
        },
        {
            login: "kornela@wolniak.com",
            todos: {
                toDoArray: [
                    { id: "5", description: "Default ToDo kornela", status: "To do" },
                ],
                inProgressTasksArray: [{
                    id: "7",
                    description: "Default Done2 kornela",
                    status: "In progress",
                }, ],
                doneTasksArray: [
                    { id: "6", description: "Default Done1 kornela", status: "Done" },
                ],
            },
        },
    ],
};