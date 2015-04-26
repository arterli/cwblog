/**
 * Created by Arterli on 2015/4/26.
 */
module.exports=Controller("Admin/BaseController", function(){
   "use strict";
    return {
        indexAction:function(){
            this.assign({
                active:"tag"
            });
            this.display();
        },
        dataAction:function(){
           var self=this;
            var page = this.get("offset") > 1 ? (this.get("offset") / 20) + 1 : 1;
            var limit = this.get("limit");
            var search = this.get('search').length > 0 ? this.get('search') : "";
            var where={tagname: ['like', '%' + search + '%']};
            return D('tag').page(page,limit).order('tid desc').where(where).countSelect().then(function(tag){
                var data={};
                console.log(tag)
                data.total = tag.count;
                var rows=[];
                tag.data.forEach(function(item){
                    rows.push({
                        tid: item.tid,
                        tagname:'<a class="view ml10" href="'+item.tid+'" title="访问"><i class="glyphicon glyphicon-link"></i></a> '+ item.tagname,
                        gid: item.gid
                    });
                });
                data.rows = rows;

                self.json(data);
            })
        }
    }
});
