/**
 * Created by Arterli on 2015/4/16.
 */
module.exports = Controller("Admin/BaseController" , function(){
    "use strict";
    return {
      indexAction:function(){
         //文章管理
              this.display();

      },
        dataAction:function(){
            var self=this;
            var page=(this.get("offset")/10)+1;
            var limit=this.get("limit");
            D('Article').page(page, limit).countSelect().then(function(da){
                //data的数据格式为
                var datas={};
                datas.total=da.count;

                var rows=[];
                da.data.forEach(function(item){
                     var date=new Date(item.date);
                    var y=date.getFullYear();
                    var M=date.getMonth()+1;
                    M=M<10?"0"+M:M;
                    var d=date.getDate();
                    d=d<10?"0"+d:d;
                    var h=date.getHours();
                    h=h<10?"0"+h:h;
                    var m=date.getMinutes();
                    m=m<10?"0"+m:m;
                    var time= y+"-"+M+"-"+d+" "+h+":"+m;
                    var author=D('user').where({uid:item.author}).field('username').find().then(function(data){
                      data.username;
                    });
                    rows.push({date:time,gid:item.gid,title:item.title,type:item.type});
                    console.log(author)
                    //TODO
                })

                datas.rows=rows;

               // console.log(datas);
                self.json(datas)
            });

        },
        addarticleAction:function(){
            if(this.isPost()){
             var param = this.post();
                 param.date=new Date().valueOf();
                console.log(param);
                var self = this;
                return D('article').add(param).then(function(id){
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