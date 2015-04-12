/**
 * controller
 * @return 
 */
module.exports = Controller("Admin/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/index_index.html file
      var self=this;
      this.echo(this.userInfo);
      this.display();
    },
    loginAction: function(){
      //�û���̨��½
      if(this.isPost()){
         var username = this.post('username');
         var password = this.post('password');
        var self = this;
        return D('user').where({
           username:username,
           password:md5(password)
         }).find().then(function(data){
            if(isEmpty(data)){
             return self.error(403, '�û����������벻��ȷ');
            }else{
              return self.session('userInfo',data);
            }
         }).then(function(){
          return self.redirect('index');
        })
      }else{
        this.display();
      }

    },
    logoutAction:function(){
      var self = this;
      this.session().then(function(){
        return self.redirect('login');
      })
    }
  };
});