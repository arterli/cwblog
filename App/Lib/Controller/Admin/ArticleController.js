/**
 * Created by Arterli on 2015/4/16.
 */
module.exports = Controller("Admin/BaseController", function () {
    "use strict";
    return {
        indexAction: function () {
            //文章管理
            var cate = D('category').select().then(function (data) {
                return get_children(data, 0);
            });
            this.assign({
                category: cate,
                active: 'articleindex'//当前高亮
            });
            this.display();

        },
        draftAction: function () {
            //文章管理
            var cate = D('category').select().then(function (data) {
                return get_children(data, 0);
            });
            this.assign({
                category: cate,
                active: 'draft'//当前高亮
            });
            this.display();

        },
        dataAction: function () {
            var self = this;
            var page = this.get("offset") > 1 ? (this.get("offset") / 20) + 1 : 1;
            // console.log(page)
            var limit = this.get("limit");
            var search = this.get('search').length > 0 ? this.get('search') : "";
            var where={title: ['like', '%' + search + '%']}
            if(this.get("cid")){
                where.cateid=this.get("cid");
            }
            if(this.get("hide")){
                where.hide=this.get("hide");
            }
            //console.log(where);
            return D('article').field('gid,title,username,date,catename')
                .join({
                    table: 'user',
                    join: 'left', //join方式，有 left, right, inner 3种方式
                    as: 'u', //表别名
                    on: ['author', 'uid'] //ON条件
                }).join({
                    table: 'category',
                    join: 'left', //join方式，有 left, right, inner 3种方式
                    as: 'c', //表别名
                    on: ['cateid', 'cid'] //ON条件
                }).page(page, limit).order('date desc').where(where).countSelect().then(function (da) {
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
                        var catename = item.catename ? item.catename : "未分类";
                        rows.push({
                            date: time,
                            gid: item.gid,
                            title: '<a class="view ml10" href="'+item.gid+'" title="访问"><i class="glyphicon glyphicon-link"></i></a> '+item.title,
                            type: catename,
                            username: item.username
                        });


                    });

                    datas.rows = rows;
                    //console.log(datas)
                    self.json(datas)
                });

        },
        sqlAction: function () {
            var self = this;
            D('article').field('gid,title,username,date').join({
                table: 'user',
                join: 'inner', //join方式，有 left, right, inner 3种方式，
                as: 'u', //表别名
                on: ['author', 'uid'] //ON条件
            }).page(1, 2).countSelect().then(function (data) {
                console.log(data);
                self.end(data);

            });
        },
        editAction: function () {
            if (this.isPost()) {
                var param = this.post();
                param.date = new Date().valueOf();
                //console.log(param);
                var self = this;

                return D('article').add(param).then(function (id) {
                    if (self.post('tags')) {
                        //var ids=id;
                        var tags = self.post('tags').split(",");
                        tags.forEach(function (item) {
                            var tag = {tagname: item, gid: id}
                            var where = {tagname: item}
                            return D('tag').thenAdd(tag, where, true).then(function (data) {
                                //console.log(data)
                                if (data.type == "exist") {
                                    D('tag').where({tid: data.id}).getField('gid', true).then(function (gid) {
                                        //ids=gid.push(data.id);
                                        var ids = gid + "," + id;
                                        //console.log(ids)
                                        return D('tag').where({tid: data.id}).update({gid: ids}).then(function (ok) {
                                            //console.log(ok)
                                            return self.redirect("/admin/article");
                                        })
                                    })
                                } else {
                                    return self.redirect("/admin/article");
                                }

                            })
                        })


                    }else{
                        return self.redirect("/admin/article");
                    }

                }).catch(function (err) {
                    return self.error(err);
                });
            } else {

                var cate = D('category').select().then(function (data) {
                    return get_children(data, 0);
                });
                this.assign({
                    category: cate,
                    active: "article_deit" //当前高亮
                });
                this.display();
            }

        }
    };
});