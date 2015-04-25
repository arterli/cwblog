/**
 * Created by Arterli on 2015/4/16.
 */
module.exports = Controller("Admin/BaseController", function () {
    "use strict";
    return {
        indexAction: function () {
            //文章管理
            this.assign({
                active: 'articleindex'//当前高亮
            });
            this.display();

        },
        dataAction: function () {
            var self = this;
            var page = (this.get("offset") / 10) + 1;
            var limit = this.get("limit");
            var search = this.get('search').length > 0 ? this.get('search') : "";
            D('Article').field('gid,title,username,date,type')
                .join({
                    table: 'user',
                    join: 'inner', //join方式，有 left, right, inner 3种方式
                    as: 'u', //表别名
                    on: ['author', 'uid'] //ON条件
                }).page(page, limit).order('date desc').where({title: ['like', '%' + search + '%']}).countSelect().then(function (da) {
                    //data的数据格式为
                    var datas = {};
                    datas.total = da.count;

                    var rows = [];
                    da.data.forEach(function (item) {
                        var date = new Date(item.date);
                        var y = date.getFullYear();
                        var M = date.getMonth() + 1;
                        M = M < 10 ? "0" + M : M;
                        var d = date.getDate();
                        d = d < 10 ? "0" + d : d;
                        var h = date.getHours();
                        h = h < 10 ? "0" + h : h;
                        var m = date.getMinutes();
                        m = m < 10 ? "0" + m : m;
                        var time = y + "-" + M + "-" + d + " " + h + ":" + m;
                        rows.push({
                            date: time,
                            gid: item.gid,
                            title: item.title,
                            type: item.type,
                            username: item.username
                        });


                    });

                    datas.rows = rows;
                    self.json(datas)
                });

        },
        sqlAction: function () {
            var self = this;
            D('article').field('gid,title,username,date').join({
                table: 'user',
                join: 'inner', //join方式，有 left, right, inner 3种方式
                as: 'u', //表别名
                on: ['author', 'uid'] //ON条件
            }).page(1, 2).countSelect().then(function (data) {
                console.log(data);
                self.end(data);

            });
        },
        addarticleAction: function () {
            if (this.isPost()) {
                var param = this.post();
                param.date = new Date().valueOf();
                console.log(param);
                var self = this;
                return D('article').add(param).then(function (id) {
                    return self.success(id);
                }).catch(function (err) {
                    return self.error(err);
                });
            } else {
                this.assign({
                    active: "adderticle" //当前高亮
                });
                this.display();
            }
            ;
        },
        categoryAction: function () {//分类

            var self = this;
            function tree(data,pid,count) {
                var ss=[]
               for(var key in data){
                   var pid=data[key].pid
                   var cid=data[key].cid
                     if(cid=pid){
                         data[key].con=count;
                         ss.push(data);
                         //tree(data,pid,count+1);
                     }
                  console.log(ss);
               }
               // $items[$item['pid']]['son'][$item['id']] = &$items[$item['id']];
               // return isset($items[0]['son']) ? $items[0]['son'] : array();
            }
            D('category').select().then(function(data){
           tree(data,0,1);

            })
            this.assign({
                active: "category" //当前高亮
            });
            this.display();
        },
        categoryeditAction: function () { //编辑分类
            if (this.isPost()) {
               var param = this.post();
                console.log(param);
                var self = this;
                return D('category').add(param).then(function(id){
                    return self.redirect('category');
                }).catch(function(err){
                    return self.error(err);
                });
            } else {
                this.assign({
                    active: "category" //当前高亮
                });

                this.display();
            }

        }

    };
});