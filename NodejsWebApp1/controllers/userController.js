
module.exports.userAccount = function (request, response) {
    response.render("../views/userAccount.hbs");
}

module.exports.userRegistration = function (request, response) {
    response.render("../views/userRegistration.hbs");
}

module.exports.registerUser = function (dbClient, body) {
    console.log(body);
}