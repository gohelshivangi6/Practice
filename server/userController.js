function updateUser(req, res) {
    const user = {
        name: "Default",
        email: "default@mail.com",
        role: "user"
    };

    res.send(user);
}