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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `eventId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `fee` int DEFAULT NULL,
  PRIMARY KEY (`eventId`)
) ENGINE=InnoDB AUTO_INCREMENT=189 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (173,'Mcconnell','Expo','2020-03-12 00:00:00','2020-06-28 00:00:00','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here,',4),(174,'Lessie','Expo','2019-11-13 00:00:00','2020-02-14 00:00:00','Et qui duis culpa aliqua labore dolor irure nisi anim consequat non id cillum fugiat.',8),(175,'Carver','Expo','2020-12-17 00:00:00','2020-10-13 00:00:00','Minim ea ea cillum proident.',2),(176,'May','Expo','2020-05-30 00:00:00','2020-12-27 00:00:00','Occaecat sunt reprehenderit do ex ut elit duis quis cupidatat.',5),(177,'Barlow','Concert','2021-01-29 00:00:00','2020-12-08 00:00:00','Cupidatat laboris enim anim pariatur est quis.',1),(178,'Wells','Expo','2021-04-02 00:00:00','2020-11-06 00:00:00','Lorem qui irure quis minim aute labore esse magna adipisicing irure excepteur id.',1),(179,'Lynda','Conference','2019-05-12 00:00:00','2020-09-27 00:00:00','Cupidatat et magna non duis.',3),(180,'Ortiz','Conference','2020-07-31 00:00:00','2020-01-04 00:00:00','Nulla adipisicing deserunt ullamco consequat dolor deserunt aliquip laborum do cillum incididunt laborum excepteur.',3),(181,'Peggy','Conference','2019-11-28 00:00:00','2020-04-10 00:00:00','Aute sunt adipisicing nisi duis Lorem et.',9),(182,'Blackwell','Concert','2020-06-03 00:00:00','2020-06-23 00:00:00','Ex id proident elit dolore sit nulla ad laboris mollit pariatur ad proident amet.',6),(183,'Laverne','Concert','2020-02-28 00:00:00','2020-09-07 00:00:00','Deserunt laborum deserunt ad ullamco enim amet occaecat nulla.',7),(184,'Crosby','Conference','2020-12-10 00:00:00','2020-09-13 00:00:00','Minim anim incididunt laboris esse magna eiusmod sit veniam Lorem sunt deserunt ea do qui.',7),(185,'Ann','Concert','2019-03-07 00:00:00','2020-01-11 00:00:00','Adipisicing qui occaecat adipisicing labore sunt pariatur consectetur occaecat occaecat ad.',4),(186,'Spears','Concert','2020-08-19 00:00:00','2021-03-16 00:00:00','Incididunt ipsum elit et dolore.',0),(187,'Juliet','Conference','2020-03-15 00:00:00','2020-07-30 00:00:00','Nisi sint in duis ut.',9),(188,'College Career','Expo','2021-04-24 00:00:00','2021-04-29 00:00:00','Meeting with 100+ Company and learn more about the company and future career paths',0);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
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

-- Dump completed on 2021-04-25 10:43:59
