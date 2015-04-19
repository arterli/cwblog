/**
 * controller
 * @return 
 */
var fs = require('fs');
//var webshot = require('webshot');
module.exports = Controller("Admin/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/article_addarticle.html file

       // var b="upload/ddddd";
        //fs.mkdirSync(b);
      this.display();
    },
    loginAction: function(){
      //用户后台登陆
      if(this.isPost()){
         var username = this.post('username');
         var password = this.post('password');
        var self = this;
        return D('user').where({
           username:username,
           password:md5(password)
         }).find().then(function(data){
            if(isEmpty(data)){
             return self.error(403, '用户名或者密码不正确');
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
    },
      //图片上传
      utilUploadImg: function(upImgName, upImgPath) {
          var extension = '';
          var finalFileName = '';

          //处理后缀和文件名
          upImgPath.indexOf('png') !== -1 ? extension = '.png' : extension = '.jpg';
          finalFileName = new Date().getTime() + extension;

          //读取文件
          fs.readFile(upImgPath, function(err, data) {
              if (err) {
                  console.log('There was an error when reading file');
              } else {
                  //写入文件到uplaod
                  fs.writeFile('upload/dd/' + finalFileName, data, function(err) {
                      if (err) {
                          console.log('There was an error when write file');
                      } else {
                          console.log('saved');
                      }
                  });
              }
          });

          return finalFileName;
      },
      //添加
      addAction: function() {
          var self = this;
          var where = {
              name: ''
          };

          if (self.isPost()) {
              var pData = self.post();
              var vBImg = self.file('img');
              var finalFileName = this.utilUploadImg(pData.name, vBImg.path);

              where.name = pData.name;
              //保存数据到数据库
              pData.img = finalFileName;

          } else {
              self.assign({
                  'title': '管理-新增品牌'
              });
              return self.display();
          }
      }
  };
});