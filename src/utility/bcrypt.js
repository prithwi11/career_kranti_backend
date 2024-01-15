const bcrypt = require('bcrypt')
const SALT_ROUNDS = Number(require('../config').SALT_ROUNDS)

const generatePassword = async(data) => {
    let saltRound = bcrypt.genSaltSync(SALT_ROUNDS)
    let hash = bcrypt.hashSync(data, saltRound)
    return hash
}

const comparePass = async(inputPassword, savedPassword) => {
    let compare = await bcrypt.compare(inputPassword, savedPassword)
    return compare
}

module.exports = {
    generatePassword : generatePassword,
    comparePass : comparePass
}