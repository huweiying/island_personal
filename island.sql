SET NAMES UTF8;
DROP DATABASE IF EXISTS island;
CREATE DATABASE island CHARSET=UTF8;
USE island;

CREATE TABLE user(
 uid INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(32),
 upwd VARCHAR(32),
 email VARCHAR(64),
 phone VARCHAR(16),
 avatar VARCHAR(128),
 gender INT
);

CREATE TABLE boating(
bid INT PRIMARY KEY AUTO_INCREMENT,
bname VARCHAR(32),
bpic VARCHAR(64)
);

INSERT INTO boating VALUES
(NULL,"Azalea Cruise","img/boating/Azalea-Cruise-01-700x383.jpg"),
(NULL,"Azalea Cruise","img/boating/Azalea-Cruise-02-700x383.jpg"),
(NULL,"Azalea Cruise","img/boating/Azalea-Cruise-03-700x383.jpg"),
(NULL,"Azalea Cruise","img/boating/Azalea-Cruise-04-700x383.jpg"),
(NULL,"Scubaspa Maldives","img/boating/Scubaspa-Maldives-01-700x383.jpg"),
(NULL,"Scubaspa Maldives","img/boating/Scubaspa-Maldives-02-700x383.jpg"),
(NULL,"Scubaspa Maldives","img/boating/Scubaspa-Maldives-03-700x383.jpg"),
(NULL,"Scubaspa Maldives","img/boating/Scubaspa-Maldives-04-700x383.jpg"),
(NULL,"Adora","img/boating/Adora-01-700x383.jpg"),
(NULL,"Adora","img/boating/Adora-02-700x383.jpg"),
(NULL,"Adora","img/boating/Adora-03-700x383.jpg"),
(NULL,"Adora","img/boating/Adora-04-700x383.jpg"),
(NULL,"Fantom Yacht","img/boating/Fantom-Yacht-01-700x383.jpg"),
(NULL,"Fantom Yacht","img/boating/Fantom-Yacht-02-700x383.jpg"),
(NULL,"Fantom Yacht","img/boating/Fantom-Yacht-03-700x383.jpg"),
(NULL,"Fantom Yacht","img/boating/Fantom-Yacht-04-700x383.jpg"),
(NULL,"Dream Voyager Yacht","img/boating/Dream-Voyager-Yacht-01-700x383.jpg"),
(NULL,"Dream Voyager Yacht","img/boating/Dream-Voyager-Yacht-02-700x383.jpg"),
(NULL,"Dream Voyager Yacht","img/boating/Dream-Voyager-Yacht-03-700x383.jpg"),
(NULL,"Dream Voyager Yacht","img/boating/Dream-Voyager-Yacht-04-700x383.jpg");

#首页轮播图表
CREATE TABLE index_pic(
ipid INT PRIMARY KEY AUTO_INCREMENT,
pic_lg VARCHAR(32),
pic_sm VARCHAR(64)
);

INSERT INTO index_pic VALUES
(NULL,"img/island.jpg","img/island-200x80.jpg"),
(NULL,"img/xx20170731.jpg","img/xx20170731-200x80.jpg"),
(NULL,"img/male.jpg","img/male-200x80.jpg")

