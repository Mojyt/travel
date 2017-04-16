-- 闪屏表
DROP TABLE IF EXISTS splash;
CREATE TABLE splash
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR (255),
  subtitle VARCHAR (255),
  des VARCHAR (255),
  pic VARCHAR (255)
)DEFAULT CHARSET=utf8;

-- 用户表
DROP TABLE IF EXISTS user;
CREATE TABLE user
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  account VARCHAR (255),
  password VARCHAR (255),
  headPortrait VARCHAR (255),
  nickname VARCHAR (255),
  createTime VARCHAR (255)
)DEFAULT CHARSET=utf8;

-- 景点表
DROP TABLE IF EXISTS scenic;
CREATE TABLE scenic
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  type INT (12),
  des VARCHAR (255),
  pic VARCHAR (255),
  price INT (12),
  title VARCHAR (255),
  region_id INT (12),
  text VARCHAR (255)
)DEFAULT CHARSET=utf8;

-- 景点副表
DROP TABLE IF EXISTS scenic_branch;
CREATE TABLE scenic_branch
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  scenic_id INT (12),
  label_id INT (12)
)DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS label;
CREATE TABLE label
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255)
)DEFAULT CHARSET=utf8;

-- 小景点
DROP TABLE IF EXISTS littleScenic;
CREATE TABLE littleScenic
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  scenic_id INT (12)
)DEFAULT CHARSET=utf8;

-- 地区表
DROP TABLE IF EXISTS region;
CREATE TABLE region
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255),
  pid INT (12)
)DEFAULT CHARSET=utf8;

-- 游记表
DROP TABLE IF EXISTS notes;
CREATE TABLE notes
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  user_id INT (12),
  scenic_id INT(12),
  des VARCHAR (255),
  title VARCHAR (255)
)DEFAULT CHARSET=utf8;

-- 游记副表
DROP TABLE IF EXISTS notes_branch;
CREATE TABLE notes_branch
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  user_id INT (12),
  notes_id INT(12)
)DEFAULT CHARSET=utf8;

-- 订单表
DROP TABLE IF EXISTS orders;
CREATE TABLE orders
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  price INT (12),
  numble INT (12),
  createTime VARCHAR (255),
  discount_id INT (12),
  is_pay VARCHAR (255),
  user_id INT (12)
)DEFAULT CHARSET=utf8;

-- 优惠券表
DROP TABLE IF EXISTS discount;
CREATE TABLE discount
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  price INT (12),
  user_id INT (12)
)DEFAULT CHARSET=utf8;

-- 收藏表
DROP TABLE IF EXISTS collection;
CREATE TABLE collection
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  scenic_id INT (12),
  user_id INT (12)
)DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS admin_user;
CREATE TABLE admin_user
(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  account VARCHAR (255),
  password VARCHAR (255),
  hash VARCHAR (255)
)DEFAULT CHARSET=utf8;

INSERT INTO user (id, account, password, hash)
VALUES
(1,'admin','e10adc3949ba59abbe56e057f20f883e','c30807e6587ade285ba7ade9f881b3d7');