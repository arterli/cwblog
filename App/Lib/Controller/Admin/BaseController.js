/**
 * 项目里的Controller基类
 * 这里做一些通用的处理逻辑，其他Controller继承该类
 * @param  {[type]} 
 * @return {[type]}         [description]
 */
module.exports = Controller(function(){
  'use strict';
  return {
    init: function(http){
      this.super("init", http);
      //login请求不判断当前是否已经登陆
      if(this.http.action === 'login'){
        return;
      }
      var self = this;
      return self.session('userInfo').then(function(userInfo){
        if(isEmpty(userInfo)){
          //ajax访问返回一个json的错误信息
          if (self.isAjax()) {
            return self.error(403);
          } else {
            //跳转到登录页
            return self.redirect('/admin/index/login');
          }
        }else{
          //用户已经登陆获取用户信息
          self.userInfo = userInfo;
          self.assign('user',userInfo);
        }
      });
    }
  }
})