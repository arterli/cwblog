module.exports = {
  //配置项: 配置值
  port: 8360, //监听的端口
  db_type: 'mysql', // 数据库类型
  db_host: '127.0.0.1', // 服务器地址
  db_port: '3306', // 端口
  db_name: 'cmswing', // 数据库名
  db_user: 'root', // 用户名
  db_pwd: '', // 密码
  db_prefix: 'cw_', // 数据库表前缀
  //Session配置
  session_name: "cmswing", //session对应的cookie名称
  session_type: "File", //session存储类型'File', 空为内存，还可以为Db
  filter_data: false //主要是安全过滤，强烈建议开启
};