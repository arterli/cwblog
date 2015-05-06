/**
 * Created by Arter_li on 2015/5/6.
 */
var WechatAPI = require('wechat-api');
var api = new WechatAPI(C('wechat_id'),C('wechat_secret'));
var OAuth = require('wechat-oauth');
var client = new OAuth(C('wechat_id'),C('wechat_secret'));

module.exports = Controller("Home/BaseController",function(){
    'use strict';
    return {
        indexAction:function(){
            console.log(client.getAuthorizeURL("fsdaf","fasdfdsaf"))
            api.shorturl('http://mp.weixin.com', function(err,res){
                console.log(res)
                console.log(err)
            });
           console.log(api)
            this.end()
        }
    }
})