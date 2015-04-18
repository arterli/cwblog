/**
 * Created by Arterli on 2015/4/18.
 */
module.exports = Controller("Admin/BaseController" , function(){
    return {
        indexAction:function(){
            this.conf=F("ueditorconfig");
            var action = this.get("action");
            var result;
            switch (action) {
                case 'config':
                    result = this.conf;

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
        ceshiAction:function(){
            //var re=this.getFullName();
            var re = this.getFileExt();
          this.json(re);
        },
        uploadfileAction:function(){


                var filed =  this.file("upfile");
                var oriName= filed.originalFilename;
                var action = this.get("action");
                var base64 = "upload";
                var config={};
                var fieldName;
                switch (action) {
                    case 'uploadimage':
                        config = {
                            pathFormat : this.conf['imagePathFormat'],
                            maxSize : this.conf['imageMaxSize'],
                            allowFiles : this.conf['imageAllowFiles']
                        };
                        fieldName = this.conf['imageFieldName'];
                        break;
                    case 'uploadscrawl':
                       config = {
                            "pathFormat" : this.conf['scrawlPathFormat'],
                            "maxSize" : this.conf['scrawlMaxSize'],
                            "allowFiles" : this.conf['scrawlAllowFiles'],
                            "oriName" : "scrawl.png"
                         };
                        fieldName = this.conf['scrawlFieldName'];
                        base64 = "base64";
                        break;
                    case 'uploadvideo':
                        config = {
                            "pathFormat" : this.conf['videoPathFormat'],
                            "maxSize" : this.conf['videoMaxSize'],
                            "allowFiles" : this.conf['videoAllowFiles']
                        };
                        fieldName = this.conf['videoFieldName'];
                        break;
                    case 'uploadfile':
                    default:
                        config = {
                            "pathFormat" : this.conf['filePathFormat'],
                            "maxSize" : this.conf['fileMaxSize'],
                            "allowFiles" : this.conf['fileAllowFiles']
                    };
                        fieldName =  this.conf['fileFieldName'];
                        break;
                };
                 var up = new this.Uploader(fieldName, config,oriName, base64);


                return up.ssb;


        },
        //UEditor编辑器通用上传
        Uploader:function(fileField, config,oriName, type){
            var self = this;
            var fileField=fileField;
            var config=config;
            var oriName=oriName;
            if(type){
                var type=type;
            }else{var type="upload";}
            var getFullName=getFullName(config,oriName);
            self.ssb=self.getFileExt(oriName);
            //return getFullName;
        },

        //获取文件扩展名
        getFileExt: function(oriName){
        var filename=oriName;
        return filename.substr(filename.search(/[/.]/)).toLocaleLowerCase();
    },
        addAction: function() {
            var self = this;
            if (self.isPost()) {
                //获取上传的图片文件
                var vBImg = self.file();
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
                    fs.writeFile('static/' + finalFileName, data, function(err) {
                        if (err) {
                            console.log('There was an error when write file');
                        } else {
                            console.log('saved');
                        }
                    });
                }
            });

            return finalFileName;
        },



    }


});