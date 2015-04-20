/**
 * Created by Arterli on 2015/4/18.
 */
var fs = require('fs');
var http = require("http");
module.exports = Controller("Admin/BaseController", function () {
    return {
        indexAction: function () {
            this.conf = F("ueditorconfig");
            var acn = this.get("action");
            var result;
            switch (acn) {
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

                    result = this.uploadfile();
                    console.log(result);
                    break;

                /* 列出图片 */
                case 'listimage':
                    result = this.uploadlist();
                    break;
                /* 列出文件 */
                case 'listfile':
                    result = this.uploadlist();
                    break;

                /* 抓取远程文件 */
                case 'catchimage':
                    result = this.uploadcrawler();
                    break;

                default:
                    result = {
                        state: '请求地址出错'
                    };

                    break;
            }
            //返回结果
            this.jsonp(result);

        },
        ceshiAction: function () {
            //var arr=["a","b","c","d"];
            //arr.push("x")
            //console.log(arr)
            //var re=this.getFullName();
            //var re = this.getFileExt();
            //var re = "upload/image/2015041339/14293792发士大夫58476889504.jpg";
            //var n = re.lastIndexOf("/");
            //re = re.substr(0, n);
            //re = re.split("/");
            //
            //var b = [];
            //for (var i = 0; i < re.length; i++) {
            //    var a = re[i];
            //    b[i] = a;
            //    var ss = b.join("/");
            //    if (!fs.existsSync(ss)) {
            //        fs.mkdirSync(ss);
            //        console.log(a + '目录创建成功');
            //    }
            //
            //}

        },
        uploadfile: function () {
            var self = this;
            if (self.isPost()) {
                var filed = self.file("upfile");
                var oriName = filed.originalFilename;
                var size = filed.size;
                var path = filed.path;
                var action = self.get("action");
                var base64 = "upload";
                var config = {};
                var fieldName;
                switch (action) {
                    case 'uploadimage':
                        config = {
                            pathFormat: self.conf['imagePathFormat'],
                            maxSize: self.conf['imageMaxSize'],
                            allowFiles: self.conf['imageAllowFiles']
                        };
                        fieldName = self.conf['imageFieldName'];
                        break;
                    case 'uploadscrawl':
                        config = {
                            "pathFormat": self.conf['scrawlPathFormat'],
                            "maxSize": self.conf['scrawlMaxSize'],
                            "allowFiles": self.conf['scrawlAllowFiles'],
                            "oriName": "scrawl.png"
                        };
                        fieldName = self.conf['scrawlFieldName'];
                        base64 = "base64";
                        break;
                    case 'uploadvideo':
                        config = {
                            "pathFormat": self.conf['videoPathFormat'],
                            "maxSize": self.conf['videoMaxSize'],
                            "allowFiles": self.conf['videoAllowFiles']
                        };
                        fieldName = self.conf['videoFieldName'];
                        break;
                    case 'uploadfile':
                    default:
                        config = {
                            "pathFormat": self.conf['filePathFormat'],
                            "maxSize": self.conf['fileMaxSize'],
                            "allowFiles": self.conf['fileAllowFiles']
                        };
                        fieldName = self.conf['fileFieldName'];
                        break;
                }
                return self.uploader(fieldName, config, oriName, size, path, base64);

            }
        },
        //UEditor编辑器通用上传
        uploader: function (fileField, config, oriName, size, path, type) {
            var self = this;
            var type1 = type ? type : "upload";
            var oname,fullname,filename,filetype;
            if(type1 == "base64") {
                var base64str = self.post("upfile");
                var img = new Buffer(base64str, 'base64');
                oname = config.oriName;
                fullname = self.getFullName(config, oname);//新的储存路径
                filename = self.getFileName(fullname);//新的文件名
                filetype = self.getFileExt(oname);
                size=img.length;
                //创建目录
                self.creatdir(fullname);
                //写入文件到uplaod
                fs.writeFile(fullname, img, function (err) {
                    if (err) {
                        console.log('There was an error when write file');
                    } else {
                        console.log('保存成功');

                    }
                });
            } else {

                oname = oriName;//原文件名称
                fullname = self.getFullName(config, oname);//新的储存路径
                filename = self.getFileName(fullname);//新的文件名
                filetype = self.getFileExt(oname);
                var filpath = path;
                //创建目录
                self.creatdir(fullname);
                //读取文件
                fs.readFile(filpath, function (err, data) {
                    if (err) {
                        console.log("222222");
                    } else {
                        //写入文件到uplaod
                        fs.writeFile(fullname, data, function (err) {
                            if (err) {
                                console.log('There was an error when write file');
                            } else {
                                console.log('保存成功');


                            }
                        });
                    }
                });
            }
            //var fileField = fileField;//类型
            //var config = config;//配置文件

            console.log("输出图片信息");
           var url = "/" + fullname;
           return {state: "SUCCESS", url: url, title: filename, original: oname, type: filetype, size: size};


        },
        //在线列表
        uploadlist: function () {
            var self = this;
            var allowFiles, listSize, path;
            //判断类型
            switch (self.get("action")) {
                //列出文件
                case 'listfile':
                    allowFiles = self.conf['fileManagerAllowFiles'];
                    listSize = self.conf['fileManagerListSize'];
                    path = self.conf['fileManagerListPath'];
                    break;
                //列出图片
                case 'listimage':
                default:
                    allowFiles = self.conf['imageManagerAllowFiles'];
                    listSize = self.conf['imageManagerListSize'];
                    path = self.conf['imageManagerListPath'];
            }
            //allowFiles = allowFiles.join("").replace(/[.]/g,"|").substr(1);
            /* 获取参数 */
            var size = self.get('size') ? self.get('size') : listSize;
            var start = self.get('start') ? self.get('start') : 0;
            var end = parseInt(size) + parseInt(start);
            /* 获取文件列表 */
            path = path.substr(0, path.lastIndexOf("/"));
            var files = scanFolder(path).files;
            if (files.length == 0) {
                return {
                    "state": "no match file",
                    "list": [],
                    "start": start,
                    "total": files.length
                }
            }
            /* 获取指定范围的列表 */
            var len = files.length;
            var files_n=[];
            for(var i = 0; i<len ; i++){
                var t= files[i].substr(files[i].lastIndexOf(".")).toLocaleLowerCase();
                if(in_array(t,allowFiles)){
                   files_n.push(files[i])
                }
            }

             var lenn=files_n.length;
            for (var i = Math.min(end, lenn) - 1,list=[]; i < lenn && i >= 0 && i >= start; i--) {
                var f="/"+files_n[i];
                list.push({url:f});
            }
            console.log(list);
            return {
                "state": "SUCCESS",
                "list": list,
                "start": start,
                "total": files.length
            };

        },

        //远程保存图片
        uploadcrawler: function () {
            var self = this;
            var fullname, filename, filetype,oname;
            /* 上传配置 */
            var config = {
                    "pathFormat" : self.conf['catcherPathFormat'],
                "maxSize" : self.conf['catcherMaxSize'],
                "allowFiles" : self.conf['catcherAllowFiles'],
                "oriName" : "remote.png"
        };
            var fieldName = self.conf['catcherFieldName'];

            //size=img.length;
            /* 抓取远程图片 */
            var list = [];
            var source = self.post(fieldName+"[]");
            var sourcearr=[];
            if(typeof(source)=="string"){
                sourcearr.push(source);
                source=sourcearr;
            }

            source.forEach(function(url){
                oname = url.match(/[\/]([^\/]*)[\.]?[^\.\/]*$/)[1];
                fullname = self.getFullName(config, oname);//新的储存路径
                filetype = self.getFileExt(oname);
                //var img=url.replace("&amp;", "&");
                fullname = fullname.substr(0,fullname.lastIndexOf("/")+1)+oname;


                http.get(url, function(res){
                        var imgData = "";

                        res.setEncoding("binary");


                        res.on("data", function(chunk){
                            imgData+=chunk;
                        });

                        res.on("end", function(){
                            oname = url.match(/[\/]([^\/]*)[\.]?[^\.\/]*$/)[1];
                            fullname = self.getFullName(config, oname);//新的储存路径
                            filetype = self.getFileExt(oname);
                            var fname = fullname.substr(0,fullname.lastIndexOf("/")+1)+oname;
                            fs.writeFile(fname, imgData, "binary", function (err) {
                                if (err) {
                                    console.log('There was an error when write file');
                                } else {
                                    console.log(fname+'保存成功');

                                }
                            });
                        });
                    }).end();

                    var furl="/"+fullname;
                    list.push({"state":"SUCCESS","url":furl,"size":431521,"title":oname,"original":oname,"source":url});
                    console.log("读取")

               // if(isFile(fullname)){

               // }

            });
            console.log("接收")
            /* 返回抓取数据 */

                return {
                    state:list.length ? 'SUCCESS':'ERROR',
                    list:list
                }

               //TODO 异步有问题还未解决！


        },
        //重命名文件
        getFullName: function (conf, oriName) {
            //替换目录日期事件
            ///ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}
            var self = this;
            //var filename= this.filed;
            var format = conf.pathFormat;
            var d = new Date();
            var t = d.getTime();
            var date = {};
            date.yyyy = d.getFullYear();
            date.mm = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
            date.dd = (d.getDate() < 10 ? "0" : "") + d.getDate();
            format = format.replace("{yyyy}", date.yyyy);
            format = format.replace("{mm}", date.mm);
            format = format.replace("{dd}", date.dd);
            format = format.replace("{time}", t);
            //计算随机数
            var str = format.match(/\{rand\:[\d]*\}/i)
            var index = str[0].search(/:/) + 1;
            index = str[0].charAt(index);
            var rand = Math.random();
            rand = rand.toString();
            rand = rand.substr(2, index);
            //替换随机数
            format = format.replace(str[0], rand);
            var ext = self.getFileExt(oriName);
            return format + ext;
        },
        //获取文件扩展名
        getFileExt: function (oriName) {
            var filename = oriName;
            return filename.substr(filename.lastIndexOf(".")).toLocaleLowerCase();
        },
        //获取文件名称
        getFileName: function (fullname) {
            return fullname.substr(fullname.lastIndexOf("/") + 1);
        },
        //创建目录
        creatdir: function (re) {

            var n = re.lastIndexOf("/");

            re = re.substr(0, n);
            re = re.split("/");

            var b = [];
            for (var i = 0; i < re.length; i++) {
                var a = re[i];
                b[i] = a;
                var ss = b.join("/");
                if (!fs.existsSync(ss)) {
                    fs.mkdirSync(ss);
                    console.log(a + '目录创建成功');
                    console.log(ss);
                }

            }
        },
        addAction: function () {
            var self = this;
            if (self.isPost()) {
                //获取上传的图片文件
                var vBImg = self.file();
                //利用上传图片的name和path属性
                var finalFileName = this.utilUploadImg(pData.name, vBImg.path);

                where.name = pData.name;
                //保存数据到数据库
                pData.img = finalFileName;
                brandModel.thenAdd(pData, where, true).then(function (insertId) {
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
        }


    }


});