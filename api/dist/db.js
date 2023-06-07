"use strict";
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');
let dbConnection;
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(process.env.MONGODB_URL)
            .then((client) => {
            dbConnection = client.db();
            console.log('DB connected!');
            return cb();
        })
            .catch(err => {
            console.log(err);
            return cb(err);
        });
    },
    getDb: () => dbConnection
};
//# sourceMappingURL=db.js.map