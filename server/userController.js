function updateUser(req, res) {
    const user = {
        name: req.body.name,
        email: "default@mail.com",
        role: req.body.role
    };

    console.log("User updated successfully");
    res.send(user);
}