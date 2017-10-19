const mysql = require('mysql');
const config = require('../config');

// 创建连接池
let sqlPool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USER,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});


// 数据库操作
let sqlQuery = (sql, value) => {
    return new Promise( (resolve, reject) => {
        sqlPool.getConnection( (err, connection) => {
            if (err) {
                resolve(err)
            } else {
                connection.query(sql, value, (err, rows) => {
                    if ( err ) {
                        reject(err)
                    } else {
                        resolve(rows);
                    }

                    connection.release();
                });
            }
        });
    });
};