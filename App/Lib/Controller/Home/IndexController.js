/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
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