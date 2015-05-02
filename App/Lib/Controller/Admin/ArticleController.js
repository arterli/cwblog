/**
 * Created by Arterli on 2015/4/16.
 */
module.exports = Controller("Admin/BaseController", function () {
    "use strict";
    return {
        indexAction: function () {
            //文章管理
            var self=this;
            var cate = D('category').select().then(function (data) {
                return get_children(data, 0);
            });
            this.assign({
                success:self.get('success')==1?"1":"0",
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
        deleAction: function () {
            //删除文章
            var self = this;
            if (this.isAjax('get')) {
                var gid = this.get('gid');
                gid = gid.split(",")
                if (gid.length > 1) {
                    var gids = [];
                    gid.forEach(function (item) {
                        gids.push(item);

                    });
                    var where = {gid: ["IN", gids]}
                     var gidd=gids;
                } else {
                    where = {gid: gid[0]}
                    gidd=gid;
                }
                if (this.get('gid')) {

                    return D('article').where(where).delete().then(function (row) {
                            gidd.forEach(function(gtm){

                                D('tag').where({gid: ['like','%{'+gtm+'}%']}).select().then(function (data) {
                                    console.log(data);
                                    var gid ='{'+gtm+'';
                                    console.log(gid+"dddddd");
                                    data.forEach(function (item) {
                                        console.log(item.gid)
                                        var index = item.gid.indexOf(gid)
                                        var isdh = item.gid.slice(index - 1, index);
                                        if (isdh == ",") {
                                            console.log("有，")
                                            var ngid = item.gid.replace("," + gid, "")
                                            console.log(ngid)
                                        } else {
                                            console.log("没有，")
                                            ngid = item.gid.replace(gid, "")
                                            console.log(ngid)
                                        }
                                        console.log(item);
                                        D('tag').where({tid: item.tid}).update({gid: ngid}).then(function (d) {
                                            console.log(d);
                                        });
                                    })

                                });
                            })



                        self.json(row);
                    })
                } else {
                    this.end();
                }


            }
        },
        dataAction: function () {
            var self = this;
            var page = this.get("offset") > 1 ? (this.get("offset") / 20) + 1 : 1;
            // console.log(page)
            var limit = this.get("limit");
            var search = this.get('search').length > 0 ? this.get('search') : "";
            var where = {title: ['like', '%' + search + '%']}
            if (this.get("cid")) {
                where.cateid = this.get("cid");
            }
            if (this.get("hide")) {
                where.hide = this.get("hide");
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
                        var time = times(item.date);
                        var catename = item.catename ? item.catename : "未分类";
                        rows.push({
                            date: time,
                            gid: item.gid,
                            title: '<a class="view ml10" href="' + item.gid + '" title="访问"><i class="glyphicon glyphicon-link"></i></a> ' + item.title,
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
        addAction: function () {
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
                            var tag = {tagname: item, gid: '{' + id + '}'}
                            var where = {tagname: item}
                            return D('tag').thenAdd(tag, where, true).then(function (data) {
                                //console.log(data)
                                if (data.type == "exist") {
                                    D('tag').where({tid: data.id}).getField('gid', true).then(function (gid) {
                                        //ids=gid.push(data.id);
                                        var ids = gid + "," + '{' + id + '}';
                                        //console.log(ids)
                                        return D('tag').where({tid: data.id}).update({gid: ids}).then(function (ok) {
                                            //console.log(ok)
                                        })
                                    })
                                }

                            })
                        })


                    }
                    return self.redirect("/admin/article/index/success/1");
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

        },
        editAction: function () {
            if (this.isPost()) {
                var param = this.post();
                //param.date = new Date().valueOf();
                console.log(param);
                var self = this;
                return D('article').where({gid: param.gid}).update(param).then(function (id) {
                    D('tag').where({gid: ['like', '%{' + param.gid + '}%']}).select().then(function (tags) {
                        function unique(arr) {//数组去重
                            var ret = []
                            var hash = {}

                            for (var i = 0; i < arr.length; i++) {
                                var item = arr[i]
                                var key = typeof(item) + item
                                if (hash[key] !== 1) {
                                    ret.push(item)
                                    hash[key] = 1
                                }
                            }

                            return ret
                        }

                        function unarr(arr1, arr2) {//删除重复
                            if (arr1.length > arr2.length) {
                                var len = arr1.length;
                                var larr = arr1;
                                var sarr = arr2;
                            } else {
                                len = arr2.length;
                                larr = arr2;
                                sarr = arr1;
                            }
                            var res = []
                            for (var i = 0; i < len; i++) {
                                if (!in_array(larr[i], sarr)) {
                                    res.push(larr[i]);
                                }
                            }
                            return res;
                        }

                        var n_tags = param.tags.split(",")
                        console.log("n_tags:" + n_tags)
                        var y_tags = []
                        tags.forEach(function (item) {
                            y_tags.push(item.tagname);
                        })
                        console.log("y_tags:" + y_tags)
                        var c_tags = y_tags.concat(n_tags)//合并数组
                        console.log("c_tags:" + c_tags)
                        var un_tags = unique(c_tags);//去重
                        console.log("un_tags:" + un_tags)
                        var ntags = unarr(un_tags, y_tags);//新增家的
                        console.log(ntags.length);
                        var ytags = unarr(un_tags, n_tags);//去除的
                        console.log(ytags.length);
                        if (ntags.length > 0) {//如果有新加的tag，直接添加
                            var tags = ntags;
                            console.log(tags);
                            tags.forEach(function (item) {
                                var tag = {tagname: item, gid: '{' + param.gid + '}'}
                                var where = {tagname: item}
                                return D('tag').thenAdd(tag, where, true).then(function (data) {
                                    //console.log(data)
                                    if (data.type == "exist") {
                                        D('tag').where({tid: data.id}).getField('gid', true).then(function (gid) {
                                            //ids=gid.push(data.id);
                                            var ids = gid + "," + '{' + param.gid + '}';

                                            console.log(ids)
                                            return D('tag').where({tid: data.id}).update({gid: ids}).then(function (ok) {
                                                return ok;
                                                //return self.redirect("/admin/article");
                                            })
                                        })
                                    }
                                    return data;
                                })
                            })
                        }

                        if (ytags.length) {
                            console.log(ytags);
                            D('tag').where({tagname: ['like', ytags]}).select().then(function (data) {
                                console.log(data);
                                var gid = '{' + param.gid + '}'
                                data.forEach(function (item) {
                                    console.log(item.gid)
                                    var index = item.gid.indexOf(gid)
                                    var isdh = item.gid.slice(index - 1, index);
                                    if (isdh == ",") {
                                        console.log("有，")
                                        var ngid = item.gid.replace("," + gid, "")
                                        console.log(ngid)
                                    } else {
                                        console.log("没有，")
                                        ngid = item.gid.replace(gid, "")
                                        console.log(ngid)
                                    }
                                    console.log(item);
                                    D('tag').where({tid: item.tid}).update({gid: ngid}).then(function (d) {
                                        console.log(d);
                                    });
                                })

                            });

                        }
                        console.log("555555555555555555555555555555555555555");
                    })
                    console.log("666666666666666666666666666666666666")
                    return self.redirect("/admin/article/index/success/1");
                });

            } else {

                var dd = '{2123}';
                var ss = dd.match(/\d/g).join("")
                console.log(ss);
                var self = this;
                var cate = D('category').select().then(function (data) {
                    return get_children(data, 0);
                });
                var data = D('article').alias('a')
                    .join({
                        table: 'category',
                        jion: 'left',
                        as: 'c',
                        on: ['cateid', 'cid']
                    }).where({gid: self.get('gid')}).find().then(function (data) {
                        data.date = times(data.date)
                        self.assign('data', data);
                        D('tag').where({gid: ['like', '%{' + data.gid + '}%']}).select().then(function (tags) {
                            self.assign('tags', tags);
                            console.log(tags)
                            console.log(data)
                            self.assign({
                                category: cate,
                                active: "article_deit" //当前高亮
                            });
                            self.display();
                        })
                    })

            }
        }
    };
});