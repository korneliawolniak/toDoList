const db = require("./db");
const uuid = ({ v4: uuidv4 } = require("uuid"));

module.exports = function(server) {
    server.get("/tasks/:login", (req, res) => {
        let tasksForFrontend = undefined;
        const loginValue = req.params.login;
        const defaultObj = {
            login: loginValue,
            todos: {
                toDoArray: [],
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
        const taskObj = {
            id: uuidv4(),
            description: task[0].toUpperCase() + task.substring(1) + "!",
            status: "To do",
        };

        db.tasks.forEach((el) => {
            if (el.login === login) {
                el.todos.toDoArray.push(taskObj);
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
                    (el) => el.id !== task.droppedTask.id
                );
                switch (current) {
                    case "toDoArray":
                        task.droppedTask.status = "To do";
                        break;
                    case "inProgressTasksArray":
                        task.droppedTask.status = "In progress";
                        break;
                    case "doneTasksArray":
                        task.droppedTask.status = "Done";
                        break;
                }
                el.todos[current].push(task.droppedTask);
                res.send({ status: "Moved" });
            }
        });
    });

    server.put("/task-delete", (req, res) => {
        const login = req.body.login;
        const task = req.body.task;
        db.tasks.forEach((el) => {
            if (el.login === login) {
                el.todos.doneTasksArray = el.todos.doneTasksArray.filter(
                    (el) => el.id !== task.id
                );
            }
        });
        res.send({ status: "Deleted" });
    });
};