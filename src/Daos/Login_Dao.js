const readPool = require('../dbConnection').readPool;
const writePool = require('../dbConnection').writePool;

module.exports.checkEmail = async(data) => {
    const sql = 'SELECT * FROM career_user WHERE email = ?'
    try {
        const [resp] = await readPool.query(sql, [data.email])
        return resp
    }
    catch (e) {
        console.log(e)
        return false
    }
}

module.exports.checkPassword = async(data) => {
    const sql = 'SELECT * FROM career_user WHERE email = ? AND password = ?'
    try {
        const [resp] = await readPool.query(sql, [data.email, data.password])
        return resp
    }
    catch (e) {
        console.log(e)
        return false
    }
}