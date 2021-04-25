-- MySQL dump 10.13  Distrib 8.0.23, for macos10.15 (x86_64)
--
-- Host: db-project.cmkuufzrzwzv.ap-southeast-1.rds.amazonaws.com    Database: db_registration
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name_idx` (`gender`),
  CONSTRAINT `name` FOREIGN KEY (`gender`) REFERENCES `Gender` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=245 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (2,'Chang','Orr','changorr@biospan.com','31ca492d-1e46-47d8-ac5e-fe701b1ad16f','changorr@biospan.com','1998-01-21','Female',23),(3,'Romero','Waters','romerowaters@biospan.com','8fcc5e2e-9fb3-4828-ac05-4b81422bae56','romerowaters@biospan.com','2014-11-16','Nonbinary',22),(4,'Janell','Luna','janellluna@biospan.com','154f1aee-70ed-41e9-a0c9-70cb9fdf1da4','janellluna@biospan.com','2015-08-18','Male',20),(5,'Hood','Anderson','hoodanderson@biospan.com','5b868fed-0c25-4281-8082-2e886595cb6f','hoodanderson@biospan.com','2016-02-10','Female',39),(6,'Allen','Peck','allenpeck@biospan.com','50e98137-649e-4e73-87ab-b8d3de3ba3ca','allenpeck@biospan.com','2015-08-19','Male',39),(7,'Wendi','Leach','wendileach@biospan.com','a073c19e-2f21-4a6d-bbba-0179250bac69','wendileach@biospan.com','2018-07-22','Female',36),(8,'Golden','Klein','goldenklein@biospan.com','efdd104c-e32f-4590-b2ef-d743db6b6461','goldenklein@biospan.com','2018-10-17','Female',25),(9,'Price','Hoover','pricehoover@biospan.com','b08dcb73-b8ff-41a3-8d3a-242f6d0ca623','pricehoover@biospan.com','2014-03-11','Female',29),(10,'Brandi','Sykes','brandisykes@biospan.com','e4ada0d0-7f61-4a01-8847-2684112b707c','brandisykes@biospan.com','2018-11-04','Female',28),(11,'Tucker','Mckinney','tuckermckinney@biospan.com','2ce79b53-4b24-4da9-a1ce-a4bc024cc7c6','tuckermckinney@biospan.com','2014-04-13','Male',28),(12,'Velasquez','Rodriguez','velasquezrodriguez@biospan.com','9446dd99-e967-4803-8e15-1c7f7c72e88e','velasquezrodriguez@biospan.com','2015-09-03','Male',40),(13,'Mcfadden','Montgomery','mcfaddenmontgomery@biospan.com','9ae84ab0-ace8-4b8e-b9a2-083ad582790e','mcfaddenmontgomery@biospan.com','2018-05-01','Female',37),(14,'Susanne','Bryan','susannebryan@biospan.com','848afe11-2c03-43e0-95d8-02e9a50141ae','susannebryan@biospan.com','2014-05-12','Male',27),(15,'Woods','Wise','woodswise@biospan.com','5c2af792-71f6-450b-ad41-215ba09dd741','woodswise@biospan.com','2016-04-30','Male',23),(16,'Chasity','Rojas','chasityrojas@biospan.com','9cbe04b4-0562-4b6c-be80-1fccdbfe677f','chasityrojas@biospan.com','2018-11-27','Female',22),(17,'Patrice','Guthrie','patriceguthrie@biospan.com','0527fe15-1cdb-4827-b97d-e2a6d18fbbb5','patriceguthrie@biospan.com','2020-06-29','Female',36),(18,'Shelley','Stephenson','shelleystephenson@biospan.com','d519d6ab-b084-4b99-b87e-ecc0716dbc4b','shelleystephenson@biospan.com','2017-12-08','Male',23),(208,'Emre','Gucer','emreg2000@gmail.com','siajhfahsflaksd','emreg2000@gmail.com','2000-06-22','Male',20),(209,'Jirawat','Zhou','zhou.jirawat@gmail.com','slhf;jfhl','zhou.jirawat@gmail.com','2001-02-22','Male',20);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-25 10:44:00
