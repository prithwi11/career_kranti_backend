module.exports.login = (data) => {
    let errcounter = 0;
    if (data.email === undefined || data.email === null) {
        errcounter++
        console.log('email is missing')
    }
    if (data.password === undefined || data.password === null) {
        errcounter++
        console.log('password is missing')
    }
    return errcounter <= 0;
}