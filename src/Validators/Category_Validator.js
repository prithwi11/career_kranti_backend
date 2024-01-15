module.exports.addCategory = (data) => {
    let errcounter = 0;
    if (data.userId == null || data.userId === undefined) {
        errcounter++
        console.log('userId is missing')
    }
    if (data.category_name == null || data.category_name === undefined) {
        errcounter++
        console.log('category_name is missing')
    }
    if (data.category_parent_id == null || data.category_parent_id === undefined) {
        errcounter++
        console.log('category_parent_id is missing')
    }
    if (data.category_level == null || data.category_level === undefined) {
        errcounter++
        console.log('category_level is missing')
    }
}