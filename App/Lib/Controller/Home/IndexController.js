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
      this.action('home/index/home');
    },
      homeAction: function(){

          this.display();
      },
      blogAction:function(){
          this.display();
      },
      catAction:function(){
          this.display();
      }

  };
});