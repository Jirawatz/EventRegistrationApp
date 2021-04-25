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
-- Table structure for table `organizers`
--

DROP TABLE IF EXISTS `organizers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organizers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=246 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizers`
--

LOCK TABLES `organizers` WRITE;
/*!40000 ALTER TABLE `organizers` DISABLE KEYS */;
INSERT INTO `organizers` VALUES (23,'Karen','Santos','Coriander','(946) 492-3259','karensantos@quotezart.com','86262594-f218-48eb-9136-4e7ebe005536','karensantos@quotezart.com','2014-01-24'),(24,'Whitfield','Merrill','Pyramax','(943) 520-3198','whitfieldmerrill@coriander.com','7bd70f9d-6bbe-4593-ab16-dc9474508a99','whitfieldmerrill@coriander.com','2021-01-08'),(25,'Violet','Nelson','Locazone','(844) 520-3603','violetnelson@pyramax.com','c99152db-2cc3-4709-a482-a1fb392c1ed8','violetnelson@pyramax.com','2018-07-14'),(26,'Frieda','Gibson','Suremax','(888) 451-3577','friedagibson@locazone.com','f57eaa9a-31b7-453b-a34d-3b420fdcea7e','friedagibson@locazone.com','2014-06-10'),(27,'Marisa','Evans','Hometown','(802) 462-3019','marisaevans@suremax.com','6c01ddc4-9e5c-4a4b-805a-47ed07f90520','marisaevans@suremax.com','2021-01-20'),(28,'Kelly','Randall','Comtest','(897) 425-2344','kellyrandall@hometown.com','16df671c-1b0f-4f18-b8ab-eb60d311fd72','kellyrandall@hometown.com','2017-03-01'),(29,'Stacy','Hays','Sultraxin','(977) 425-2025','stacyhays@comtest.com','ed35d818-e9ad-4b3a-aed6-d52523cc0abc','stacyhays@comtest.com','2020-01-02'),(30,'Chrystal','Nunez','Magnemo','(997) 590-2080','chrystalnunez@sultraxin.com','a44908c3-3b5f-427a-8e6c-817085cd9860','chrystalnunez@sultraxin.com','2018-04-19'),(31,'Arlene','Schmidt','Turnling','(952) 547-2814','arleneschmidt@magnemo.com','6eaaeccc-3ff7-40b5-8aca-3f150b761ca2','arleneschmidt@magnemo.com','2019-08-03'),(32,'Rhodes','Sawyer','Terragen','(970) 554-2597','rhodessawyer@turnling.com','8d1029ad-03f5-4a71-90e1-6fd799c03c8e','rhodessawyer@turnling.com','2019-07-08'),(33,'Trudy','Hall','Ebidco','(953) 422-3550','trudyhall@terragen.com','377e2f8d-1f04-4d2d-9186-53eb6fad5591','trudyhall@terragen.com','2015-07-15'),(34,'Gertrude','Lamb','Hawkster','(873) 529-2122','gertrudelamb@ebidco.com','9bc83040-1637-4d98-b9bc-498f277db1ed','gertrudelamb@ebidco.com','2015-07-11'),(35,'Bush','Vaughan','Bisba','(989) 507-3127','bushvaughan@hawkster.com','967783a9-2699-40c6-b372-0cf68e273c3b','bushvaughan@hawkster.com','2021-02-20'),(210,'Test','Organizer','Test Company','091234567','testorganizer@testcompany.org','k\'sljfl;sf','testorganizer@testcompany.org','1962-02-24');
/*!40000 ALTER TABLE `organizers` ENABLE KEYS */;
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

-- Dump completed on 2021-04-25 10:44:02
