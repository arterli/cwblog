/*
Navicat MySQL Data Transfer

Source Server         : 本地数据库
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : cmswing

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-04-27 01:54:32
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
  `cateid` int(10) NOT NULL DEFAULT '0',
  `type` varchar(20) NOT NULL DEFAULT 'blog',
  `views` int(10) unsigned NOT NULL DEFAULT '0',
  `comnum` int(10) unsigned NOT NULL DEFAULT '0',
  `attnum` int(10) unsigned NOT NULL DEFAULT '0',
  `top` enum('off','on') NOT NULL DEFAULT 'off',
  `sortop` enum('off','on') NOT NULL DEFAULT 'off',
  `hide` enum('off','on') NOT NULL DEFAULT 'off',
  `checked` enum('off','on') NOT NULL DEFAULT 'off',
  `allow_remark` enum('off','on') NOT NULL DEFAULT 'off',
  `password` varchar(255) NOT NULL DEFAULT '',
  `template` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`gid`),
  KEY `date` (`date`),
  KEY `author` (`author`),
  KEY `sortid` (`cateid`),
  KEY `type` (`type`),
  KEY `views` (`views`),
  KEY `comnum` (`comnum`),
  KEY `hide` (`hide`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cw_article
-- ----------------------------
INSERT INTO `cw_article` VALUES ('1', '欢迎使用emlog', '1428845299', '恭喜您成功安装了emlog，这是系统自动生成的演示文章。编辑或者删除它，然后开始您的创作吧！', '', '', '1', '0', 'blog', '2', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '');
INSERT INTO `cw_article` VALUES ('79', '犯得上发生发', '1430045873469', '<p>方法对付<br/></p>', '', '', '1', '7', 'blog', '0', '0', '0', 'off', 'off', 'on', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('81', '5555555555555555555', '1430046131877', '<p>666666666666666666666666666666<br/></p>', '', '', '1', '14', 'blog', '0', '0', '0', 'off', 'off', 'on', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('25', 'fdsfdsafsafasfa', '1430028670109', '<p>fdsafasf<br/></p>', '', '', '1', '2', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('26', 'fdsfdsafsafasfa', '1430029398180', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('27', 'fafasfa fsa', '1430032080090', '<p>fasfdasfasdf<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('28', 'fafasfa fsa', '1430032427721', '<p>fasfdasfasdf<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('29', 'fafasfa fsa', '1430032458188', '<p>fasfdasfasdf<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('30', 'fafasfa fsa', '1430032535717', '<p>fasfdasfasdf<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('31', 'fafasfa fsa', '1430032564315', '<p>fasfdasfasdf<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('32', 'fafasfa fsa', '1430032776467', '<p>fasfdasfasdf<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('33', 'fafasfa fsa', '1430032795718', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('34', 'fafasfa fsa', '1430032881807', '<p>ddd<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('35', 'fafasfa fsa', '1430032971429', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('36', 'fafasfa fsa', '1430032996386', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('37', 'fafasfa fsa', '1430033093411', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('38', 'fafasfa fsa', '1430033213440', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('39', 'fafasfa fsa', '1430033224787', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('40', 'fafasfa fsa', '1430033286448', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('41', 'fafasfa fsa', '1430033516798', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('42', 'fafasfa fsa', '1430033859006', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('43', 'fafasfa fsa', '1430033910312', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('44', 'fafasfa fsa', '1430034030327', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('45', 'fafasfa fsa', '1430034234406', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('46', 'fafasfa fsa', '1430034289772', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('47', 'fafasfa fsa', '1430034327810', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('48', 'fafasfa fsa', '1430034412617', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('49', 'fafasfa fsa', '1430034463137', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('50', 'fafasfa fsa', '1430034507724', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('51', 'fafasfa fsa', '1430034627736', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('52', 'fafasfa fsa', '1430034696811', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('53', 'fafasfa fsa', '1430034717892', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('54', 'fafasfa fsa', '1430034758640', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('55', 'fafasfa fsa', '1430034773571', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('56', 'fafasfa fsa', '1430034806715', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('57', 'fafasfa fsa', '1430034837103', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('58', 'fafasfa fsa', '1430034852475', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('59', 'fafasfa fsa', '1430034924906', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('60', 'fafasfa fsa', '1430035029002', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('61', 'fafasfa fsa', '1430035043891', '', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('62', '魏汝稳热望', '1430035143123', '<p>萨芬萨<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('63', '魏汝稳热望', '1430035192465', '<p>萨芬萨<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('64', '魏汝稳热望', '1430035218148', '<p>萨芬萨<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('65', '魏汝稳热望', '1430035400615', '<p>萨芬萨<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('66', '魏汝稳热望', '1430035442994', '<p>萨芬萨<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('67', '魏汝稳热望', '1430035518019', '<p>萨芬萨<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('68', '魏汝稳热望1111', '1430035905400', '<p>萨芬萨<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('69', '的撒啊', '1430035960919', '<p>发撒法<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('70', '222222', '1430036046465', '<p>2222222<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('71', '21212', '1430036134562', '<p>3213123<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('72', '21212', '1430036192932', '<p>3213123<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('73', '4444', '1430036220424', '<p>44444<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('74', '6666666666666666', '1430036271325', '<p>777777777777777777<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('75', '范德萨发大水发', '1430036360183', '<p>的方式大富士达<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('76', '幅度萨芬士大夫啊', '1430036398324', '<p>犯得上发射点发<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('77', 'rwqrqwrqwrqrq', '1430043172860', '<p>rewrewqrqwerq<br/></p>', '', '', '1', '10', 'blog', '0', '0', '0', 'off', 'off', 'off', 'off', 'on', '', '1');
INSERT INTO `cw_article` VALUES ('80', 'q\'q\'q\'q\'q\'q\'q\'q\'q\'q\'q\'q\'q\'q\'q\'q\'q\'q', '1430046029788', '<p>3333333333333333333<br/></p>', '', '', '1', '0', 'blog', '0', '0', '0', 'off', 'off', 'on', 'off', 'on', '', '1');

-- ----------------------------
-- Table structure for cw_category
-- ----------------------------
DROP TABLE IF EXISTS `cw_category`;
CREATE TABLE `cw_category` (
  `cid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `catename` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(200) NOT NULL DEFAULT '',
  `taxis` int(10) unsigned NOT NULL DEFAULT '0',
  `pid` int(10) unsigned NOT NULL DEFAULT '0',
  `description` text NOT NULL,
  `template` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cw_category
-- ----------------------------
INSERT INTO `cw_category` VALUES ('1', 'aa', 'aa', '1', '0', '222asdasda', '');
INSERT INTO `cw_category` VALUES ('2', 'bb', 'bb', '2', '1', 'bbbbbbbbb', '');
INSERT INTO `cw_category` VALUES ('3', 'cc', 'cc', '3', '2', 'ccc', '');
INSERT INTO `cw_category` VALUES ('4', 'dada', 'wqwq', '1', '2', '2222222222222222222222', '1');
INSERT INTO `cw_category` VALUES ('5', 'dada222', 'wqwq', '1', '2', '2222222222222222222222', '1');
INSERT INTO `cw_category` VALUES ('6', 'da222111', '6666', '1', '2', '2222222222222222222222777777777777', '1');
INSERT INTO `cw_category` VALUES ('7', '111111', '1111', '0', '0', '', '1');
INSERT INTO `cw_category` VALUES ('8', '3333', '说法', '2', '0', '打发发啊', '1');
INSERT INTO `cw_category` VALUES ('9', '3333', '说法', '2', '0', '打发发啊', '1');
INSERT INTO `cw_category` VALUES ('10', '发放大啊 的', '发发 发', '6', '0', '放大发发阿发', '1');
INSERT INTO `cw_category` VALUES ('11', '发放大啊 的', '发发 发', '6', '0', '放大发发阿发', '1');
INSERT INTO `cw_category` VALUES ('12', '发放大啊 的', '发发 发', '6', '0', '放大发发阿发', '1');
INSERT INTO `cw_category` VALUES ('13', '发放大啊 的', '发发 发', '6', '0', '放大发发阿发', '1');
INSERT INTO `cw_category` VALUES ('14', '222', '232', '3', '7', 'ewe', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cw_session
-- ----------------------------
INSERT INTO `cw_session` VALUES ('1', 'xCc34-YcCEgDNWfCQgIpPSYBcRmQ4_eV', '{}', '1428944946981');
INSERT INTO `cw_session` VALUES ('2', 'ZJejXCmfQZxb3sgZhbep-6q1W3aWvk0t', '{\"userInfo\":{\"uid\":1,\"username\":\"admin\",\"password\":\"21232f297a57a5a743894a0e4a801fc3\",\"nickname\":\"\",\"role\":\"admin\",\"ischeck\":\"n\",\"photo\":\"\",\"email\":\"\",\"description\":\"\"}}', '1429216307647');
INSERT INTO `cw_session` VALUES ('3', 'O7smhTmcrlBAAfmU2tCNuM8EvNqjHuoR', '{\"userInfo\":{\"uid\":1,\"username\":\"admin\",\"password\":\"21232f297a57a5a743894a0e4a801fc3\",\"nickname\":\"\",\"role\":\"admin\",\"ischeck\":\"n\",\"photo\":\"\",\"email\":\"\",\"description\":\"\"}}', '1429394860553');
INSERT INTO `cw_session` VALUES ('4', '05eJE9vUYmmS-_INz7TfIfLa6c_9PFII', '{\"userInfo\":{\"uid\":1,\"username\":\"admin\",\"password\":\"21232f297a57a5a743894a0e4a801fc3\",\"nickname\":\"\",\"role\":\"admin\",\"ischeck\":\"n\",\"photo\":\"\",\"email\":\"\",\"description\":\"\"}}', '1429517830071');
INSERT INTO `cw_session` VALUES ('5', '4uSACkXqMDKs7mKQsk_yjQhbNVYyuDL_', '{\"userInfo\":{\"uid\":1,\"username\":\"admin\",\"password\":\"21232f297a57a5a743894a0e4a801fc3\",\"nickname\":\"\",\"role\":\"admin\",\"ischeck\":\"n\",\"photo\":\"\",\"email\":\"\",\"description\":\"\"}}', '1429477478416');
INSERT INTO `cw_session` VALUES ('6', 'ksSslf9rZF7-9mYKpv7P7biCZGRryyFg', '{\"userInfo\":{\"uid\":1,\"username\":\"admin\",\"password\":\"21232f297a57a5a743894a0e4a801fc3\",\"nickname\":\"\",\"role\":\"admin\",\"ischeck\":\"n\",\"photo\":\"\",\"email\":\"\",\"description\":\"\"}}', '1429529197355');
INSERT INTO `cw_session` VALUES ('7', 'ZWqgxvvZYQyoYfdT-cUT6PO_OxpiKTYM', '{\"userInfo\":{\"uid\":1,\"username\":\"admin\",\"nickname\":\"\",\"role\":\"admin\",\"ischeck\":\"n\",\"photo\":\"\",\"email\":\"\",\"description\":\"\"},\"count\":3}', '1430149225275');

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
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cw_tag
-- ----------------------------
INSERT INTO `cw_tag` VALUES ('1', 'example tags', '63,65,66,67,69,70,71,72,73,74,75,76,77,78,79,80,81');
INSERT INTO `cw_tag` VALUES ('2', 'sortable', '63,65,66,67,70,71,72,73,74,75,76,77,78,79,80,81');
INSERT INTO `cw_tag` VALUES ('3', 'autocomplete', '63,65,66,67,70,71,72,73,74,75,76,77,78,79,80,81');
INSERT INTO `cw_tag` VALUES ('4', 'edit in place', '63,65,66,67,70,71,72,73,74,75,76,77,78,79,80,81');
INSERT INTO `cw_tag` VALUES ('5', '的说法是', '67');
INSERT INTO `cw_tag` VALUES ('6', '大大撒', '68');
INSERT INTO `cw_tag` VALUES ('7', '放大方法', '69');
INSERT INTO `cw_tag` VALUES ('8', '2222', '70');
INSERT INTO `cw_tag` VALUES ('9', '7777', '76');

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

-- ----------------------------
-- View structure for 11
-- ----------------------------
DROP VIEW IF EXISTS `11`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `11` AS SELECT
cw_article.gid,
cw_article.title,
cw_article.date,
cw_user.username,
cw_category.catename
FROM
cw_article
LEFT JOIN cw_category ON cw_article.cateid = cw_category.cid
LEFT JOIN cw_user ON cw_article.author = cw_user.uid ;
