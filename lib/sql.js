// sql 语句

// CREATE
const INIT_CREATE = {
    CREATE_USERS_TABLE: `create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        password VARCHAR(40) NOT NULL,
        email VARCHAR(40) NOT NULL,
        create_time VARCHAR(40) NOT NULL,
        PRIMARY KEY ( id ));`,

    CREATE_POSTS_TABLE: `create table if not exists posts(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        title VARCHAR(40) NOT NULL,
        content  VARCHAR(40) NOT NULL,
        uid  VARCHAR(40) NOT NULL,
        moment  VARCHAR(40) NOT NULL,
        comments  VARCHAR(40) NOT NULL DEFAULT '0',
        pv  VARCHAR(40) NOT NULL DEFAULT '0',
        PRIMARY KEY ( id ));`,

    CREATE_COMMENTS_TABLE: `create table if not exists comment(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        content VARCHAR(40) NOT NULL,
        postid VARCHAR(40) NOT NULL,
        PRIMARY KEY ( id ));`
};

// INSERT
const INSERT_USER_DATA = `insert into users(name,password,email,create_time) values(?,?,?,?);`;

const INSERT_POST_DATA = `insert into posts(uid, name,title,content,create_time) values(?,?,?,?,?);`;

const INSERT_COMMENT_DATA = `insert into comment(name,content,postid) values(?,?,?);`;

// UPDATE
const UPDATE_POST_COMMENT = `update posts set  comments=? where id=?`;

const UPDATE_POST_PV = `update posts set  pv=? where id=?`;

const UPDATE_POST = `update posts set title=?,content=? where id=?`;

// SELECT
// const SELECT_USER_BY_NAME_OR_EMAIL = `select * from users where name="${name}" or email="${email}"`;

// const SELECT_POST_BY_NAME = `select * from posts where name="${name}"`;

// const SELECT_POST_BY_ID = `select * from posts where id="${id}"`;

// const SELECT_COMMENT_BY_POSTID = `select from comment where postid="${id}"`;

const SELECT_ALL_POST = `select * from posts`;

// const SELECT_COMMENT_LENGTH = `select content from comment where postid in (select id from posts where id=${id})`;


// DELETE
// const DELETE_POST = `delete from posts where id = ${id}`;

// const DELETE_COMMENT = `delete from comment where id = ${id}`;

// const DELETE_ALL_COMMENT = `delete from comment where postid = ${id}`;



export {
    INIT_CREATE,

    INSERT_USER_DATA,
    INSERT_POST_DATA,
    INSERT_COMMENT_DATA,

    UPDATE_POST_COMMENT,
    UPDATE_POST_PV,
    UPDATE_POST,

    // SELECT_USER_BY_NAME,
    // SELECT_POST_BY_ID,
    // SELECT_COMMENT_BY_POSTID,
    // SELECT_ALL_POST,
    // SELECT_COMMENT_LENGTH,

    // DELETE_POST,
    // DELETE_COMMENT,
    // DELETE_ALL_COMMENT
}