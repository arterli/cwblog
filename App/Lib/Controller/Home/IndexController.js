/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
      _404Action: function(){
          this.status(404); //发送404状态码
          this.end('not found');
      },
    indexAction: function(){
      //render View/Home/article_edit.html file
        var aa="dfsdfsd";
      this.action('home/index/home');
    },
      homeAction: function(){
          this.assign('active','home');//当前高亮初始值
          this.display();
      },
      blogAction:function(){
          this.assign('active','blog');//当前高亮初始值
          this.display();
      },
      catAction:function(){
          this.assign('active','blog');//当前高亮初始值
          this.display();
      }

  };
});