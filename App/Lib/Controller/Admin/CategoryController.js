/**
 * Created by Arterli on 2015/4/26.
 */
module.exports = Controller("Admin/BaseController", function () {
    "use strict";
    return {
        indexAction: function () {
            this.assign({
                active: "category" //当前高亮
            });
            this.display();

        },
        categoryAction: function () {

            var self = this;

            if (this.isPost()) {
                D('category').select().then(function (data) {
                    self.json(get_children(data, 0));
                });
            }
        },
        editAction: function () { //编辑分类
            if (this.isPost()) {
                var param = this.post();
                console.log(param);
                var self = this;
                return D('category').add(param).then(function (id) {
                    return self.redirect('index');
                }).catch(function (err) {
                    return self.error(err);
                });
            } else {
                var cate = D('category').select().then(function (data) {
                    return get_children(data, 0);
                });

                this.assign({
                    category: cate,
                    active: "category" //当前高亮
                });

                this.display();
            }

        }


    };
});