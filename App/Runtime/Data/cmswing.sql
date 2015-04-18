/*
Navicat MySQL Data Transfer

Source Server         : 本地数据库
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : cmswing

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-04-18 12:47:32
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
