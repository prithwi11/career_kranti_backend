const readPool = require('../dbConnection').readPool
const writePool = require('../dbConnection').writePool

module.exports.addCategory = async(data) => {
    const sql = 'INSERT INTO career_category_master (`user_id`, `category_name`, `category_parent_id`, `category_level`) VALUES (?, ?, ?, ?)'
    try {
        const [resp] = await readPool.query(sql, [data.userId, data.category_name, data.category_parent_id, data.category_level]);
        return true
    }
    catch (e) {
        console.log(e)
        return false
    }
}