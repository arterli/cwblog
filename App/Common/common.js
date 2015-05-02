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


/**
 * 排序函数
 */
function sort_node(v,w){
    return v["taxis"] - w["taxis"];
}

/**
 * 获取子集分类 （这里是获取所有子集）
 */
global.get_children =function (nodes, parent){
    var children = [];
    var last = []; /* 未访问的节点 */
    /*
     * 获取根分类列表。
     * 创建一个虚拟父级分类亦可
     **/
    var node = null;
    for (var i in nodes) {
        node = nodes[i];
        if (node["pid"] == parent) {
            node["deep"] = 0;
            children.push(node);
        }else{
            last.push(node);
        }
    }
    children.sort(sort_node);

    /* 同级排序 */
    var jumper = 0;
    var stack = children.slice(0); /* easy clone */


    while (stack.length> 0
        /* just in case */ && jumper++ < 200) {
        var shift_node = stack.shift();
        var list = []; /* 当前子节点列表 */

        var last_static = last.slice(0);
        last = [];
        for (var i in last_static) {
            node = last_static[i];
            if (node["pid"] == shift_node["cid"]) {
                node["deep"] = shift_node["deep"] + 1;
                list.push(node);
            }else{
                last.push(node);
            }
        }
        list.sort(sort_node);

        for (var i in list) {
            node = list[i];
            stack.push(node);
            children.push(node);
        }
    }
    /*
     * 有序树非递归前序遍历
     * http://ds.fzu.edu.cn/fine/resources/FlashContent.asp?id=51
     * */
    var stack = []; /* 前序操作栈 - 分类编号 */
    var top = null; /* 操作栈顶 */
    var tree = children.slice(0); /* 未在前序操作栈内弹出的节点 */
    var has_child = false; /* 是否有子节点，如无子节点则弹出栈顶 */
    var children = []; /* 清空结果集 */
    var jumper = 0;
    last = [];/* 未遍历的节点 */
    var current = null; /* 当前节点 */
    stack.push(parent); /* 建立根节点 */

    while (stack.length > 0) {
        if (jumper++ > 200) {
            break;
        }
        top = stack[stack.length - 1];
        has_child = false;
        last = [];

        for (var i in tree ) {
            current = tree[i];
            if (current["pid"] == top) {
                top = current["cid"];
                stack.push(top);
                children.push(current);
                has_child = true;
            } else {
                last.push(current);
            }
        }
        tree = last.slice(0);
        if (!has_child) {
            stack.pop();
            top = stack[stack.length - 1];
        }
    }
    return children;
}
global.times = function(d){
    var date = new Date(d);
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
    return time;
}