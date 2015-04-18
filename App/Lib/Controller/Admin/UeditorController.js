/**
 * Created by Arterli on 2015/4/18.
 */
module.exports = Controller("Admin/BaseController" , function(){
    return {
        indexAction:function(){

            var action = this.get("action");
            var result;
            switch (action) {
                case 'config':
                    result = F("ueditorconfig");

                    break;

                /* 上传图片 */
                case 'uploadimage':
                /* 上传涂鸦 */
                case 'uploadscrawl':
                /* 上传视频 */
                case 'uploadvideo':
                /* 上传文件 */
                case 'uploadfile':
                  result = this.uploadfileAction();
                    break;

                /* 列出图片 */
                case 'listimage':

                    break;
                /* 列出文件 */
                case 'listfile':

                    break;

                /* 抓取远程文件 */
                case 'catchimage':

                    break;

                default:
                   result = {
                        state: '请求地址出错'
                    };
                    break;
            };
            //返回结果
            this.jsonp(result);

        },
        uploadfileAction:function(){
            return {a:"dsfsafa"}
        },
        addAction: function() {
            var self = this;
            var where = {
                name: ''
            };

            if (self.isPost()) {
                var brandModel = D('Brand');
                var pData = self.post();
                //获取上传的图片文件
                var vBImg = self.file('img');
                //利用上传图片的name和path属性
                var finalFileName = this.utilUploadImg(pData.name, vBImg.path);

                where.name = pData.name;
                //保存数据到数据库
                pData.img = finalFileName;
                brandModel.thenAdd(pData, where, true).then(function(insertId) {
                    if (insertId.type === 'add') {
                        return self.redirect('/home/index/index');
                    } else {
                        return self.error(insertId.type);
                    }
                });
            } else {
                self.assign({
                    'title': '管理-新增品牌'
                });
                return self.display();
            }
        },
//图片上传
        utilUploadImg: function(upImgName, upImgPath) {
            var extension = '';
            var finalFileName = '';

            //处理后缀和文件名
            upImgPath.indexOf('png') !== -1 ? extension = '.png' : extension = '.jpg';
            finalFileName = new Date().getTime() + extension;

            //读取文件
            fs.readFile(upImgPath, function(err, data) {
                if (err) {
                    console.log('There was an error when reading file');
                } else {
                    //写入文件到uplaod
                    fs.writeFile('upload/' + finalFileName, data, function(err) {
                        if (err) {
                            console.log('There was an error when write file');
                        } else {
                            console.log('saved');
                        }
                    });
                }
            });

            return finalFileName;
        }
    }


});