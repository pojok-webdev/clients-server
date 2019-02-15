gets = () => {
    sql = 'select id,name,clientcategory from clients '
    console.log('sql',sql)
    return sql
}
module.exports = {
    gets:gets
}