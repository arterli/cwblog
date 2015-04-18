/*
Navicat MySQL Data Transfer

Source Server         : 本地数据库
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : cmswing

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-04-18 12:56:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cw_article
-- ----------------------------
DROP TABLE IF EXISTS `cw_article`;
CREATE TABLE `cw_article` (
  `gid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `date` bigint(20) NOT NULL,
  `content` longtext NOT NULL,
  `excerpt` longtext NOT NULL,
  `alias` varchar(200) NOT NULL DEFAULT '',
  `author` int(10) NOT NULL DEFAULT '1',
  `sortid` int(10) NOT NULL DEFAULT '-1',
  `type` varchar(20) NOT NULL DEFAULT 'blog',
  `views` int(10) unsigned NOT NULL DEFAULT '0',
  `comnum` int(10) unsigned NOT NULL DEFAULT '0',
  `attnum` int(10) unsigned NOT NULL DEFAULT '0',
  `top` enum('n','y') NOT NULL DEFAULT 'n',
  `sortop` enum('n','y') NOT NULL DEFAULT 'n',
  `hide` enum('n','y') NOT NULL DEFAULT 'n',
  `checked` enum('n','y') NOT NULL DEFAULT 'y',
  `allow_remark` enum('n','y') NOT NULL DEFAULT 'y',
  `password` varchar(255) NOT NULL DEFAULT '',
  `template` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`gid`),
  KEY `date` (`date`),
  KEY `author` (`author`),
  KEY `sortid` (`sortid`),
  KEY `type` (`type`),
  KEY `views` (`views`),
  KEY `comnum` (`comnum`),
  KEY `hide` (`hide`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cw_article
-- ----------------------------
INSERT INTO `cw_article` VALUES ('1', '欢迎使用emlog', '1428845299', '恭喜您成功安装了emlog，这是系统自动生成的演示文章。编辑或者删除它，然后开始您的创作吧！', '', '', '1', '-1', 'blog', '2', '0', '0', 'n', 'n', 'n', 'y', 'y', '', '');
INSERT INTO `cw_article` VALUES ('2', 'sdfasf', '1429120526', 'fdsafdsaffdsafdsafasfdsa', '', '', '1', '-1', 'blog', '0', '0', '0', 'n', 'n', 'n', 'y', 'y', '', '');
INSERT INTO `cw_article` VALUES ('3', '', '1429120632', '', '', '', '1', '-1', 'blog', '0', '0', '0', 'n', 'n', 'y', 'y', 'y', '', '');
INSERT INTO `cw_article` VALUES ('4', '1111111111111111111', '1429206936', 'fafdsafdsafdsafasfdsafas', '', '', '1', '-1', 'blog', '0', '0', '0', 'n', 'n', 'n', 'y', 'y', '', '');
INSERT INTO `cw_article` VALUES ('5', '22222222222222', '1429207063', '<p>\r\n	wfsfsdfsdfs\r\n</p>\r\n<p>\r\n	<a target=\"_blank\" href=\"http://localhost/emlog/content/uploadfile/201504/5dd21429207177.jpg\" id=\"ematt:1\"><img src=\"http://localhost/emlog/content/uploadfile/201504/thum-5dd21429207177.jpg\" title=\"点击查看原图\" alt=\"b21c8701a18b87d603377112050828381f30fd42.jpg\" height=\"263\" border=\"0\" width=\"420\" /></a>\r\n</p>', '', '', '1', '-1', 'blog', '2', '0', '1', 'n', 'n', 'n', 'y', 'y', '', '');
INSERT INTO `cw_article` VALUES ('6', '范德萨发发生发f   大', '0', '<p>的萨芬打算发阿发阿发<img src=\"http://img.baidu.com/hi/jx2/j_0028.gif\"/></p>', '', '', '1', '-1', 'blog', '0', '0', '0', 'n', 'n', 'n', 'y', 'y', '', '');
INSERT INTO `cw_article` VALUES ('7', 'ewewe', '0', '<p>wwww<br/></p>', '', '', '1', '-1', 'blog', '0', '0', '0', 'n', 'n', 'n', 'y', 'y', '', '');

-- ----------------------------
-- Table structure for cw_session
-- ----------------------------
DROP TABLE IF EXISTS `cw_session`;
CREATE TABLE `cw_session` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) NOT NULL DEFAULT '',
  `data` text,
  `expire` bigint(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cookie` (`key`),
  KEY `expire` (`expire`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cw_session
-- ----------------------------
INSERT INTO `cw_session` VALUES ('1', 'xCc34-YcCEgDNWfCQgIpPSYBcRmQ4_eV', '{}', '1428944946981');
INSERT INTO `cw_session` VALUES ('2', 'ZJejXCmfQZxb3sgZhbep-6q1W3aWvk0t', '{\"userInfo\":{\"uid\":1,\"username\":\"admin\",\"password\":\"21232f297a57a5a743894a0e4a801fc3\",\"nickname\":\"\",\"role\":\"admin\",\"ischeck\":\"n\",\"photo\":\"\",\"email\":\"\",\"description\":\"\"}}', '1429216307647');
INSERT INTO `cw_session` VALUES ('3', 'O7smhTmcrlBAAfmU2tCNuM8EvNqjHuoR', '{\"userInfo\":{\"uid\":1,\"username\":\"admin\",\"password\":\"21232f297a57a5a743894a0e4a801fc3\",\"nickname\":\"\",\"role\":\"admin\",\"ischeck\":\"n\",\"photo\":\"\",\"email\":\"\",\"description\":\"\"}}', '1429394860553');

-- ----------------------------
-- Table structure for cw_sort
-- ----------------------------
DROP TABLE IF EXISTS `cw_sort`;
CREATE TABLE `cw_sort` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sortname` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(200) NOT NULL DEFAULT '',
  `taxis` int(10) unsigned NOT NULL DEFAULT '0',
  `pid` int(10) unsigned NOT NULL DEFAULT '0',
  `description` text NOT NULL,
  `template` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cw_sort
-- ----------------------------
INSERT INTO `cw_sort` VALUES ('1', 'aa', 'aa', '1', '0', '222asdasda', '');
INSERT INTO `cw_sort` VALUES ('2', 'bb', 'bb', '2', '0', 'bbbbbbbbb', '');
INSERT INTO `cw_sort` VALUES ('3', 'cc', 'cc', '3', '2', 'ccc', '');

-- ----------------------------
-- Table structure for cw_tag
-- ----------------------------
DROP TABLE IF EXISTS `cw_tag`;
CREATE TABLE `cw_tag` (
  `tid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tagname` varchar(60) NOT NULL DEFAULT '',
  `gid` text NOT NULL,
  PRIMARY KEY (`tid`),
  KEY `tagname` (`tagname`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cw_tag
-- ----------------------------
INSERT INTO `cw_tag` VALUES ('1', '222', ',5,');
INSERT INTO `cw_tag` VALUES ('2', '333', ',5,');
INSERT INTO `cw_tag` VALUES ('3', '555', ',5,');
INSERT INTO `cw_tag` VALUES ('4', '6667', ',5,');
INSERT INTO `cw_tag` VALUES ('5', '778', ',5,');
INSERT INTO `cw_tag` VALUES ('6', '999', ',5,');
INSERT INTO `cw_tag` VALUES ('7', 'sss', ',5,');
INSERT INTO `cw_tag` VALUES ('8', 'dds　速度', ',5,');

-- ----------------------------
-- Table structure for cw_user
-- ----------------------------
DROP TABLE IF EXISTS `cw_user`;
CREATE TABLE `cw_user` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL DEFAULT '',
  `password` varchar(64) NOT NULL DEFAULT '',
  `nickname` varchar(20) NOT NULL DEFAULT '',
  `role` varchar(60) NOT NULL DEFAULT '',
  `ischeck` enum('n','y') NOT NULL DEFAULT 'n',
  `photo` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(60) NOT NULL DEFAULT '',
  `description` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`uid`),
  KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cw_user
-- ----------------------------
INSERT INTO `cw_user` VALUES ('1', 'admin', '21232f297a57a5a743894a0e4a801fc3', '', 'admin', 'n', '', '', '');
