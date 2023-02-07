const { Client } = require('pg');

//dbClient with credentials to database
const client = new Client({
    host: 'manny.db.elephantsql.com',
    port: 5432,
    user: 'flpakjyw',
    password: '3Yijid7lHt18TlPcjMeABY4uY4CeQjsJ'
});

//Connect to database
client.connect()
    .then(() => console.log('Connected'))
    .catch((err) => console.log('Connection error', err.stack));

async function addUser(login, password, name, email, about) {
    try {
        await client.query(`INSERT INTO "Users"("Login", "Password", "Name", "Email", "About") VALUES('${login}', '${password}', '${name}', '${email}', '${about}')`);
        console.log('User added');
    }
    catch (e) {
        console.log(e.stack);
    }
}

async function selectAllUsers() {
    try {
        let result = await client.query(`SELECT * FROM "Users"`);
        console.log(`login: ${result.rows[0].Login} | password: ${result.rows[0].Password} | email: ${result.rows[0].Email}`);
    }
    catch (e) {
        console.log(e.stack);
    }
}
//selectAllUsers();
//addUser('test', 'test', 'test', 'test', 'test');
