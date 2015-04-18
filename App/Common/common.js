//这里定义一些全局通用的函数，该文件会被自动加载

//重命名文件
global.getFullName= function(conf,oriName){
    //替换目录日期事件
    ///ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}
    //var filename= this.filed;
    var conf = conf;
    var format = conf.pathFormat;
    var oriName =oriName;
    var d = new Date();
    var t = d.getTime();
    var date = {};
    date.yyyy = d.getFullYear();
    date.mm = (d.getMonth()+1)<10?"0"+(d.getMonth()+1):d.getMonth()+1;
    date.dd = (d.getDate()<10?"0":"")+d.getDate();
    format = format.replace("{yyyy}",date.yyyy);
    format = format.replace("{mm}",date.mm);
    format = format.replace("{dd}",date.dd);
    format = format.replace("{time}", t);
    //计算随机数
    var str=format.match(/\{rand\:[\d]*\}/i)
    var index=str[0].search(/:/)+1;
    index=str[0].charAt(index);
    var rand = Math.random();
    rand=rand.toString();
    rand=rand.substr(2,index);
    //替换随机数
    format=format.replace(str[0], rand);
    var ext = oriName.substr(oriName.search(/[/.]/)).toLocaleLowerCase();
    return format+ext;
}