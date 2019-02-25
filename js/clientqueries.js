create = obj => {
    sql = 'insert into clients (name,clientcategory) '
    sql+= 'values '
    sql+= '("'+obj.name+'","'+obj.clientcategory+'") '
    console.log('sql',sql)
    return sql
}
get = obj => {
    sql = 'select id,name,clientcategory from clients '
    sql+= 'where id = '+obj.id+' '
    console.log('sql',sql)
    return sql
}
gets = () => {
    sql = 'select id,name,clientcategory from clients '
    sql+= 'limit 1,10'
    console.log('sql',sql)
    return sql
}
update = obj => {
    sql = 'update clients set clientcategory="'+obj.clientcategory+'" '
    sql+= 'where id='+obj.id+' '
    console.log('sql',sql)
    return sql
}
remove = obj => {
    sql = 'delete from clients '
    sql+= 'where id='+obj.id+' '
    console.log('sql',sql)
    return sql
}
module.exports = {
    create:create,
    get:get,
    gets:gets,
    update:update,
    remove:remove
}