/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/article_edit.html file
      this.display();
    },
    formAction:function(){

        this.display()
    },

    jieshouAction:function(){
     var p=this.post();
      console.log(p);
      var fh={};
      fh.emal= p.emal;
      fh.pass= p.password;
      fh.ck= p.ck;
      this.end(fh);
    }

  };
});