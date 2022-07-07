const db = require("./db");
module.exports = function(server) {
    server.get("/tasks/:login", (req, res) => {
        let tasksForFrontend = undefined;
        const loginValue = req.params.login;
        const defaultObj = {
            login: loginValue,
            todos: {
                toDoArray: [
                    { id: "2", description: "Default Done1 nowy", status: "Done" },
                ],
                inProgressTasksArray: [],
                doneTasksArray: [],
            },
        };
        db.tasks.forEach((el) => {
            if (el.login === loginValue) {
                tasksForFrontend = el.todos;
            }
        });
        if (tasksForFrontend === undefined) {
            db.tasks.push(defaultObj);
            tasksForFrontend = defaultObj.todos;
        }
        res.send({...tasksForFrontend });
    });
    server.post("/tasks", (req, res) => {
        const login = req.body.login;
        const task = req.body.task;

        db.tasks.forEach((el) => {
            if (el.login === login) {
                el.todos.toDoArray.push(task);
            }
        });

        res.send({ status: "Created" });
    });
    server.put("/task-move", (req, res) => {
        const login = req.body.login;
        const task = req.body.task;
        const previous = task.previousList;
        const current = task.currentList;
        db.tasks.forEach((el) => {
            if (el.login === login) {
                el.todos[previous] = el.todos[previous].filter(
                    (el) => el.id !== task.dropedTask.id
                );
                switch (current) {
                    case "toDoArray":
                        task.dropedTask.status = "To do";
                        break;
                    case "inProgressTasksArray":
                        task.dropedTask.status = "In progress";
                        break;
                    case "doneTasksArray":
                        task.dropedTask.status = "Done";
                        break;
                }

                el.todos[current].push(task.dropedTask);

                res.send({ status: "Moved" });
            }
        });
    });
    server.put("/task-delete", (req, res) => {
        const login = req.body.login;
        const task = req.body.task;
        db.tasks.forEach((el) => {
            if (el.login === login) {
                switch (task.status) {
                    case "To do":
                        el.todos.toDoArray = el.todos.toDoArray.filter(
                            (el) => el.id !== task.id
                        );
                        break;
                    case "In progress":
                        el.todos.inProgressTasksArray =
                            el.todos.inProgressTasksArray.filter((el) => el.id !== task.id);
                        break;
                    case "Done":
                        el.todos.doneTasksArray = el.todos.doneTasksArray.filter(
                            (el) => el.id !== task.id
                        );
                        break;
                }
                res.send({ status: "Deleted" });
            }
        });
    });
};