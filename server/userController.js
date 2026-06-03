function updateUser(req, res) {
    const user = {
        name: "Default",
        email: "default@mail.com",
        role: req.body.role
    };

    res.send(user);
}