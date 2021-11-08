USE `foodbox` ;

INSERT INTO product_category(id, product_category) VALUES (1, 'INDIAN');
INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1000', 'Sweet-Rasgulla', 'Sweet/kg',
'assets/images/products/indian/placeholder-1000.png'
,1,100,9.99,1, NOW());
INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1001', 'Biriani', 'Main-course',
'assets/images/products/indian/placeholder-1001.png'
,1,100,7.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1002', 'Flaky-Poli', 'Sweet/kg',
'assets/images/products/indian/placeholder-1002.png'
,1,100,7.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1003', 'Fresh-Jalebi', 'Sweet/kg',
'assets/images/products/indian/placeholder-1003.png'
,1,100,24.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1004', 'Laddu', 'Sweet/kg',
'assets/images/products/indian/placeholder-1004.png'
,1,100,9.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1005', 'Idli', 'Breakfast',
'assets/images/products/indian/placeholder-1005.png'
,1,100,24.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1006', 'Dosa', 'Breakfast',
'assets/images/products/indian/placeholder-1006.png'
,1,100,24.99,1, NOW());
INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1007', 'Raita Poratha', 'Breakfast',
'assets/images/products/indian/placeholder-1007.png'
,1,100,24.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1008', 'Samosa', 'Sanks',
'assets/images/products/indian/placeholder-1008.png'
,1,100,24.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1009', 'Chicken-Tikka', 'Main-course',
'assets/images/products/indian/placeholder-1009.png'
,1,100,24.99,1, NOW());
INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('INDIAN-1010', 'Pakora', 'Snaks',
'assets/images/products/indian/placeholder-1010.png'
,1,100,24.99,1, NOW());








INSERT INTO product_category(id, product_category) VALUES (2, 'ASIAN');

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2000', 'Ramen', 'Asian-Noodle',
'assets/images/products/asian/placeholder-2000.png'
,1,100,19.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2001', 'FRIED-DUMMPINGS', 'Asian-Food',
'assets/images/products/asian/placeholder-2001.png'
,1,100,29.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2002', 'Vegetables-Bowl', 'Asian',
'assets/images/products/asian/placeholder-2002.png'
,1,100,24.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2003', 'Noddles-With-Meatballs', 'Asian-Noodle',
'assets/images/products/asian/placeholder-2003.png'
,1,100,29.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2004','Shrimp Soup', 'Asian-Soup',
'assets/images/products/asian/placeholder-2004.png'
,1,100,24.99,2, NOW());


INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2005','Sliced-Meat-vagetablse', 'Asian-Meat',
'assets/images/products/asian/placeholder-2005.png'
,1,100,0.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2006','Sliced-Meat-vagetabls', 'Asian-Meat',
'assets/images/products/asian/placeholder-2006.png'
,1,100,0.99,2, NOW());
INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2007','Spicy Noddle Soup', 'Asian-Soup',
'assets/images/products/asian/placeholder-2007.png'
,1,100,0.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2008','Broth-With-Pasta', 'Asian-Meat',
'assets/images/products/asian/placeholder-2008.png'
,1,100,0.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('ASIAN-2009','Sushi', 'Asian-Sushi',
'assets/images/products/asian/placeholder-2009.png'
,1,100,0.99,2, NOW());








INSERT INTO product_category(id, product_category) VALUES (3, 'BURGER');

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('BURGER-3000', 'Chicken-Fillet-Burger', 'Chicken-Burger',
'assets/images/products/burger/placeholder-3000.png'
,1,100,19.99,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('BURGER-3001', 'Chicken-Zinger-Burger', 'Chicken-Burger',
'assets/images/products/burger/placeholder-3001.png'
,1,100,29.99,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('BURGER-3002', 'Humburger', 'Beaf-Burger',
'assets/images/products/burger/placeholder-3002.png'
,1,100,24.99,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('BURGER-3003', 'King-Humburger', 'Burger-package',
'assets/images/products/burger/placeholder-3003.png'
,1,100,29.99,3, NOW());






INSERT INTO product_category(id, product_category) VALUES (4, 'PASTA');

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('PASTA-3000', 'Spaghetti', 'Pasta',
'assets/images/products/pasta/placeholder-4000.png'
,1,100,19.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('PASTA-3001', 'Ravioli', 'pasta-ravioli',
'assets/images/products/pasta/placeholder-4001.png'
,1,100,29.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('PASTA-3002', 'Lasagnia', 'Pasta-lasagnia',
'assets/images/products/pasta/placeholder-4002.png'
,1,100,24.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('PASTA-3003', 'Penne', 'pasta',
'assets/images/products/pasta/placeholder-4003.png'
,1,100,29.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('PASTA-3004', 'Gnochhi', 'pasta',
'assets/images/products/pasta/placeholder-4004.png'
,1,100,24.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('PASTA-3005', 'Macaroni', 'pasta',
'assets/images/products/pasta/placeholder-4005.png'
,1,100,24.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, unit_in_stock,
unit_price, category_id, date_created)
VALUES ('PASTA-3006', 'Linguine', 'pasta',
'assets/images/products/pasta/placeholder-4006.png'
,1,100,24.99,4, NOW());



USE `foodbox` ;

INSERT INTO `admin_login` (id, admin_name, email, first_name, last_name, password, role)
VALUES (1,'john_doe', 'john_doe@gmail.com','John','Doe','@1234','Admin') ,
(2,'will_smith','will_smith@gmail.com','will','smith','@12345','Admin') ;

INSERT INTO `country` VALUES 
(1,'BR','Brazil'),
(2,'CA','Canada'),
(3,'DE','Germany'),
(4,'IN','India'),
(5,'TR','Turkey'),
(6,'US','United States');

INSERT INTO `state` VALUES 
(1,'Acre',1),
(2,'Alagoas',1),
(3,'Amapá',1),
(4,'Amazonas',1),
(5,'Bahia',1),
(6,'Ceará',1),
(7,'Distrito Federal',1),
(8,'Espírito Santo',1),
(9,'Goiás',1),
(10,'Maranhão',1),
(11,'Mato Grosso do Sul',1),
(12,'Mato Grosso',1),
(13,'Minas Gerais',1),
(14,'Paraná',1),
(15,'Paraíba',1),
(16,'Pará',1),
(17,'Pernambuco',1),
(18,'Piaui',1),
(19,'Rio de Janeiro',1),
(20,'Rio Grande do Norte',1),
(21,'Rio Grande do Sul',1),
(22,'Rondônia',1),
(23,'Roraima',1),
(24,'Santa Catarina',1),
(25,'Sergipe',1),
(26,'São Paulo',1),
(27,'Tocantins',1),
(28,'Alberta',2),
(29,'British Columbia',2),
(30,'Manitoba',2),
(31,'New Brunswick',2),
(32,'Newfoundland and Labrador',2),
(33,'Northwest Territories',2),
(34,'Nova Scotia',2),
(35,'Nunavut',2),
(36,'Ontario',2),
(37,'Prince Edward Island',2),
(38,'Quebec',2),
(39,'Saskatchewan',2),
(40,'Yukon',2),
(41,'Baden-Württemberg',3),
(42,'Bavaria',3),
(43,'Berlin',3),
(44,'Brandenburg',3),
(45,'Bremen',3),
(46,'Hamburg',3),
(47,'Hesse',3),
(48,'Lower Saxony',3),
(49,'Mecklenburg-Vorpommern',3),
(50,'North Rhine-Westphalia',3),
(51,'Rhineland-Palatinate',3),
(52,'Saarland',3),
(53,'Saxony',3),
(54,'Saxony-Anhalt',3),
(55,'Schleswig-Holstein',3),
(56,'Thuringia',3),
(57,'Andhra Pradesh',4),
(58,'Arunachal Pradesh',4),
(59,'Assam',4),
(60,'Bihar',4),
(61,'Chhattisgarh',4),
(62,'Goa',4),
(63,'Gujarat',4),
(64,'Haryana',4),
(65,'Himachal Pradesh',4),
(66,'Jammu & Kashmir',4),
(67,'Jharkhand',4),
(68,'Karnataka',4),
(69,'Kerala',4),
(70,'Madhya Pradesh',4),
(71,'Maharashtra',4),
(72,'Manipur',4),
(73,'Meghalaya',4),
(74,'Mizoram',4),
(75,'Nagaland',4),
(76,'Odisha',4),
(77,'Punjab',4),
(78,'Rajasthan',4),
(79,'Sikkim',4),
(80,'Tamil Nadu',4),
(81,'Telangana',4),
(82,'Tripura',4),
(83,'Uttar Pradesh',4),
(84,'Uttarakhand',4),
(85,'West Bengal',4),
(86,'Andaman and Nicobar Islands',4),
(87,'Chandigarh',4),
(88,'Dadra and Nagar Haveli',4),
(89,'Daman & Diu',4),
(90,'Lakshadweep',4),
(91,'Puducherry',4),
(92,'The Government of NCT of Delhi',4),
(93,'Alabama',6),
(94,'Alaska',6),
(95,'Arizona',6),
(96,'Arkansas',6),
(97,'California',6),
(98,'Colorado',6),
(99,'Connecticut',6),
(100,'Delaware',6),
(101,'District Of Columbia',6),
(102,'Florida',6),
(103,'Georgia',6),
(104,'Hawaii',6),
(105,'Idaho',6),
(106,'Illinois',6),
(107,'Indiana',6),
(108,'Iowa',6),
(109,'Kansas',6),
(110,'Kentucky',6),
(111,'Louisiana',6),
(112,'Maine',6),
(113,'Maryland',6),
(114,'Massachusetts',6),
(115,'Michigan',6),
(116,'Minnesota',6),
(117,'Mississippi',6),
(118,'Missouri',6),
(119,'Montana',6),
(120,'Nebraska',6),
(121,'Nevada',6),
(122,'New Hampshire',6),
(123,'New Jersey',6),
(124,'New Mexico',6),
(125,'New York',6),
(126,'North Carolina',6),
(127,'North Dakota',6),
(128,'Ohio',6),
(129,'Oklahoma',6),
(130,'Oregon',6),
(131,'Pennsylvania',6),
(132,'Rhode Island',6),
(133,'South Carolina',6),
(134,'South Dakota',6),
(135,'Tennessee',6),
(136,'Texas',6),
(137,'Utah',6),
(138,'Vermont',6),
(139,'Virginia',6),
(140,'Washington',6),
(141,'West Virginia',6),
(142,'Wisconsin',6),
(143,'Wyoming',6),
(144,'Adıyaman',5),
(145,'Afyonkarahisar',5),
(146,'Ağrı',5),
(147,'Aksaray',5),
(148,'Amasya',5),
(149,'Ankara',5),
(150,'Antalya',5),
(151,'Ardahan',5),
(152,'Artvin',5),
(153,'Aydın',5),
(154,'Balıkesir',5),
(155,'Bartın',5),
(156,'Batman',5),
(157,'Bayburt',5),
(158,'Bilecik',5),
(159,'Bingöl',5),
(160,'Bitlis',5),
(161,'Bolu',5),
(162,'Burdur',5),
(163,'Bursa',5),
(164,'Çanakkale',5),
(165,'Çankırı',5),
(166,'Çorum',5),
(167,'Denizli',5),
(168,'Diyarbakır',5),
(169,'Düzce',5),
(170,'Edirne',5),
(171,'Elazığ',5),
(172,'Erzincan',5),
(173,'Erzurum',5),
(174,'Eskişehir',5),
(175,'Gaziantep',5),
(176,'Giresun',5),
(177,'Gümüşhane',5),
(178,'Hakkâri',5),
(179,'Hatay',5),
(180,'Iğdır',5),
(181,'Isparta',5),
(182,'İstanbul',5),
(183,'İzmir',5),
(184,'Kahramanmaraş',5),
(185,'Karabük',5),
(186,'Karaman',5),
(187,'Kars',5),
(188,'Kastamonu',5),
(189,'Kayseri',5),
(190,'Kırıkkale',5),
(191,'Kırklareli',5),
(192,'Kırşehir',5),
(193,'Kilis',5),
(194,'Kocaeli',5),
(195,'Konya',5),
(196,'Kütahya',5),
(197,'Malatya',5),
(198,'Manisa',5),
(199,'Mardin',5),
(200,'Mersin',5),
(201,'Muğla',5),
(202,'Muş',5),
(203,'Nevşehir',5),
(204,'Niğde',5),
(205,'Ordu',5),
(206,'Osmaniye',5),
(207,'Rize',5),
(208,'Sakarya',5),
(209,'Samsun',5),
(210,'Siirt',5),
(211,'Sinop',5),
(212,'Sivas',5),
(213,'Şanlıurfa',5),
(214,'Şırnak',5),
(215,'Tekirdağ',5),
(216,'Tokat',5),
(217,'Trabzon',5),
(218,'Tunceli',5),
(219,'Uşak',5),
(220,'Van',5),
(221,'Yalova',5),
(222,'Yozgat',5),
(223,'Zonguldak',5);