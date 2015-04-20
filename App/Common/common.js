//这里定义一些全局通用的函数，该文件会被自动加载
var fs = require('fs');
//遍历获取目录下指定类型文件
global.scanFolder = function (path) {
    var fileList = [],
        folderList = [],
        walk = function (path, fileList, folderList) {
            files = fs.readdirSync(path);
            files.forEach(function (item) {
                var tmpPath = path + '/' + item,
                    stats = fs.statSync(tmpPath);

                if (stats.isDirectory()) {
                    walk(tmpPath, fileList, folderList);
                    folderList.push(tmpPath);
                } else {
                    fileList.push(tmpPath);
                }
            });
        };

    walk(path, fileList, folderList);

    console.log('扫描' + path + '成功');

    return {
        'files': fileList,
        'folders': folderList
    }
}
//判断一个值是否在一个数组中
 global.in_array = function (stringToSearch, arrayToSearch) {
    for (var s = 0; s < arrayToSearch.length; s++) {
        var thisEntry = arrayToSearch[s].toString();
        if (thisEntry == stringToSearch) {
            return true;
        }
    }
    return false;
}