import { INIT_CREATE } from './sql';
import { sqlQuery } from './mysql';

// 打印脚本执行日志
const eventLog = function(err, key, shell) {
    if (err) {
        console.log(`[ERROR] sql脚本: ${key}  执行失败 o(╯□╰)o ！`)
        console.log(`[ERROR] sql语句: ${shell}`)
    } else {
        console.log(`[SUCCESS] sql脚本: ${key}  执行成功 O(∩_∩)O !`)
    }
}

// 执行建表sql脚本
const createAllTables = async() => {
    for (let key in INIT_CREATE) {
        let shell = INIT_CREATE[key];

        let result = await sqlQuery(shell);

        if (result.serverStatus * 1 === 2) {
            eventLog(null, key);
        } else {
            eventLog(true, key, shell);
        }
    }
    console.log('sql脚本执行结束！');
    console.log('请按 ctrl + c 键退出！');
}

createAllTables();