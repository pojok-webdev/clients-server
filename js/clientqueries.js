categoryCount = obj => {
    sql = 'select count(id) from clients '
    sql+= 'where clientcategory="'+obj.clientcategory+'" '
    console.log("sql",sql)
    return sql
}
categoryGets = obj => {
    sql = 'select id,name from clients '
    sql+= 'where clientcategory="'+obj.clientcategory+'" '
    console.log("sql",sql)
    return sql
}
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
gets = obj => {
    sql = 'select id,name,clientcategory from clients '
    sql+= 'limit '+obj.segment+','+obj.offset+' '
    console.log('sql',sql)
    return sql
}
getByName = obj => {
    sql = 'select id,name,clientcategory from clients '
    sql+= 'where name like "%'+obj.name+'%" '
    console.log('sql',sql)
    return sql
}
update = obj => {
    sql = 'update clients set clientcategory="'+obj.clientcategory+'" '
    sql+= 'where id='+obj.id+' '
    console.log('sql',sql)
    return sql
}
uncategorized = () => {
    sql = 'select id,name,clientcategory from clients '
    sql+= 'where clientcategory not in ("1","2","3","4","5") '
    sql+= 'and active="1" '
    console.log('uncategorized sql',sql)
    return sql
}
remove = obj => {
    sql = 'delete from clients '
    sql+= 'where id='+obj.id+' '
    console.log('sql',sql)
    return sql
}
module.exports = {
    categoryCount:categoryCount,
    categoryGets:categoryGets,
    create:create,
    get:get,
    gets:gets,
    getByName:getByName,
    update:update,
    uncategorized:uncategorized,
    remove:remove
}