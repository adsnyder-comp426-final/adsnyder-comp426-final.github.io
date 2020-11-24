function verifyUser(user, pass) {
    var mysql = require('mysql');
    var table = 'login_info';
    var con = mysql.createConnection({
        host: "localhost",
        user: "adsnyder",
        password: "ADSunc2022!",
        database: "accounts"
    });

    con.connect(function(err) {
        if (err) throw err;
        var sql = 'SELECT * FROM ' + table;
        con.query(sql, function (err, result) {
            if (err) throw err;
            var verification = false;
            for (var i = 0; i < result.length; i++) {
                if (result[i]['user'] == user) {
                    if (result[i]['pass'] == pass) {
                        verification = true;
                        continue;
                    }
                }
            }
            if (verification) {
                console.log('\nUser "' + user + '" verified.');
            }
            return verification;
        });
    });
}

function createUser(newUsername, newPassword) {
    var mysql = require('mysql');
    var table = 'login_info';
    var newUserID = Math.floor(Math.random() * 1000000 + 1);
    var con = mysql.createConnection({
        host: "localhost",
        user: "adsnyder",
        password: "ADSunc2022!",
        database: "accounts"
    });

    con.connect(function(err) {
        if (err) throw err;
        var sql = 'INSERT INTO ' + table + ' (user, pass, userID) '
        sql += 'VALUES ("' + newUsername + '", "' + newPassword + '", ' + newUserID + ')';
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("New user created.");
            console.log("User ID: " + newUserID);
            console.log("Username: " + newUsername);
            console.log("Password: " + newPassword);
        });
    });
}

function checkUserExists(user) {
    var mysql = require('mysql');
    var table = 'login_info';
    var con = mysql.createConnection({
        host: "localhost",
        user: "adsnyder",
        password: "ADSunc2022!",
        database: "accounts"
    });

    var exists = false;
    con.connect(function (err) {if (err) throw err;});
    var sql = 'SELECT user FROM ' + table;
    con.query(sql, function (err, result) {
        if (err) throw err;
        var exists = false;
        for (var i = 0; i < result.length; i++) {
            if (result[i]['user'] == user) {
                exists = true;
            }
        }
        con.end();
    });

    if (exists) {
        console.log('User "' + user + '" exists.');
    } else {
        console.log('User "' + user + '" does not exist.')
    }
    return exists;
}

checkUserExists('adsnyder');
verifyUser('adsnyder', 'ADSunc2022!');
createUser('hello','world');
verifyUser('hello','world');
console.log('Done');