const userDB=[];

let admin = {
    id: Date.now(),
    username: "Admin",
    email: "admin@happyTriangle.com",
    password: "SuperPowerfulAdmin",
    role: "admin"
};

userDB.push(admin);

module.exports = { userDB };

