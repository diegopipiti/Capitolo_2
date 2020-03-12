/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.6.27-log : Database - cartedb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cartedb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `cartedb`;

/*Table structure for table `carte` */

DROP TABLE IF EXISTS `carte`;

CREATE TABLE `carte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `valore` int(11) DEFAULT NULL,
  `colore` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

/*Data for the table `carte` */

insert  into `carte`(`id`,`nome`,`valore`,`colore`) values (1,'Asso',1,'Denari'),(2,'Due',2,'Denari'),(3,'Tre',3,'Denari'),(4,'Quattro',4,'Denari'),(5,'Cinque',5,'Denari'),(6,'Sei',6,'Denari'),(7,'Sette',7,'Denari'),(8,'Fante',8,'Denari'),(9,'Cavallo',9,'Denari'),(10,'Re',10,'Denari'),(22,'Asso',1,'Spade'),(23,'Due',2,'Spade'),(24,'Tre',3,'Spade'),(25,'Quattro',4,'Spade'),(26,'Cinque',5,'Spade'),(27,'Sei',6,'Spade'),(28,'Sette',7,'Spade'),(29,'Fante',8,'Spade'),(30,'Cavallo',9,'Spade'),(31,'Re',10,'Spade'),(32,'Asso',1,'Bastoni'),(33,'Due',2,'Bastoni'),(34,'Tre',3,'Bastoni'),(35,'Quattro',4,'Bastoni'),(36,'Cinque',5,'Bastoni'),(37,'Sei',6,'Bastoni'),(38,'Sette',7,'Bastoni'),(39,'Fante',8,'Bastoni'),(40,'Cavallo',9,'Bastoni'),(41,'Re',10,'Bastoni'),(42,'Asso',1,'Coppe'),(43,'Due',2,'Coppe'),(44,'Tre',3,'Coppe'),(45,'Quattro',4,'Coppe'),(46,'Cinque',5,'Coppe'),(47,'Sei',6,'Coppe'),(48,'Sette',7,'Coppe'),(49,'Fante',8,'Coppe'),(50,'Cavallo',9,'Coppe'),(51,'Re',10,'Coppe');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
