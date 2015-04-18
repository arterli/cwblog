/**
 * Created by Arterli on 2015/4/16.
 */
module.exports = Controller("Admin/BaseController" , function(){
    "use strict";
    return {
      indexAction:function(){

      },
        addarticleAction:function(){
            if(this.isPost()){
             var param = this.post();
                var data = {};
                data.title = param.title;
                data.content = param.editorValue;
                console.log(data);
                var self = this;
                return D('article').add(data).then(function(id){
                    return self.success(id);
                }).catch(function(err){
                    return self.error(err);
                });
            }else{
                this.display();
            };
        }

    };
});