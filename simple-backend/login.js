const db = require("./db");
module.exports = function(server) {
    server.post("/login", (req, res) => {
        const login = req.body.login;
        const password = req.body.password;
        const found = db.users.find((el) => el.login === login);
        if (found && found.password === password) {
            res.send({ login });
        } else {
            res.sendStatus(404);
        }
    });

    server.post("/register", (req, res) => {
        const login = req.body.login;
        const password = req.body.password;
        db.users.push({ login, password });
        res.send({ login, status: "OK" });
    });
};