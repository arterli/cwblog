/**
 * Created by Arterli on 2015/4/16.
 */
module.exports = Controller("Admin/BaseController", function () {
    "use strict";
    return {
        indexAction: function () {
            //文章管理
            this.assign({
                active:'articleindex'//当前高亮
            });
            this.display();

        },
        dataAction: function () {
            var self = this;
            var page = (this.get("offset") / 10) + 1;
            var limit = this.get("limit");
            var search=this.get('search').length>0?this.get('search'):"";
            D('Article').field('gid,title,username,date,type')
                .join({
                    table: 'user',
                    join: 'inner', //join方式，有 left, right, inner 3种方式
                    as: 'u', //表别名
                    on: ['author', 'uid'] //ON条件
                }).page(page, limit).order('date desc').where({title: ['like', '%'+search+'%']}).countSelect().then(function (da) {
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
                        rows.push({date: time, gid: item.gid, title: item.title, type: item.type,username:item.username});


                    });

                    datas.rows = rows;
                    self.json(datas)
                });

        },
        sqlAction: function () {
            var self = this;
            D('Article').field('gid,title,username,date').join({
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
                    active:"adderticle" //当前高亮
                });
                this.display();
            }
            ;
        }

    };
});