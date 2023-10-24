const User = require("./db/models/userModel");

async function createUser(newUser) {
    try{
        const user  = User.create(newUser);
        return user;
    } catch(error) {
        throw error;
    }
}

module.exports = { createUser, };