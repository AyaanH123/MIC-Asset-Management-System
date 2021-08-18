-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: assetmanagement
-- ------------------------------------------------------
-- Server version	8.0.25

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

--
-- Table structure for table `asset`
--

DROP TABLE IF EXISTS `asset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asset` (
  `asset_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `category` varchar(3) NOT NULL,
  `status_code` varchar(2) NOT NULL,
  `serial_number` varchar(100) NOT NULL,
  `asset_tag` varchar(100) DEFAULT NULL,
  `location_id` smallint DEFAULT NULL,
  `model` varchar(30) DEFAULT NULL,
  `manufacturer` varchar(30) DEFAULT NULL,
  `acquired_date` date DEFAULT NULL,
  `retired_date` date DEFAULT NULL,
  `purchase_price` decimal(10,2) DEFAULT NULL,
  `last_mod_by` varchar(45) NOT NULL,
  `last_mod_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`asset_id`),
  KEY `idx_fk_asset_category_idx` (`category`) /*!80000 INVISIBLE */,
  KEY `idx_fk_asset_status_idx` (`status_code`),
  KEY `fk_asset_location_idx` (`location_id`),
  CONSTRAINT `fk_asset_category` FOREIGN KEY (`category`) REFERENCES `asset_category` (`code`),
  CONSTRAINT `fk_asset_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`),
  CONSTRAINT `fk_asset_status` FOREIGN KEY (`status_code`) REFERENCES `asset_status` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Stores asset details';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asset`
--

LOCK TABLES `asset` WRITE;
/*!40000 ALTER TABLE `asset` DISABLE KEYS */;
INSERT INTO `asset` VALUES (1,'mo-bylaw-lp','Animal Control Officer','DSK','A','5CG925CL91','AST11222',1,'ProBook 640 G5','Hewlett-Packard','2021-07-14','2021-11-11',1000.00,'dba','2021-07-14 18:23:24','2021-07-14 18:23:24'),(2,'mb-cao','AT/AT COMPATIBLE','DSK','A','MXL53918F0','Hello Asset',1,'ProDesk 400 G2.5 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-07-15 14:43:07','2021-07-15 14:43:07'),(3,'mb-clericassist','AT/AT COMPATIBLE','DSK','A','MXL53918FK','Hello Asset 2',1,'ProDesk 400 G2.5 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-07-15 14:46:22','2021-07-15 14:46:22'),(4,'mo-clerk-test','AT/AT COMPATIBLE','DSK','U','MXL5382SRDX','TestAsset221',1,'ProDesk 400 G2.5 SFF','Hewlett-Packard','2021-07-16','2021-07-17',200.00,'user','2021-07-16 19:19:39','2021-07-15 18:18:04'),(5,'mb-5cg6392ms3','AT/AT COMPATIBLE','DSK','A','5CG6392MS3','',1,'ProBook 655 G2','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(6,'mb-cdc-lp','AT/AT COMPATIBLE','DSK','A','5CD951287L','',1,'ProBook 450 G6','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(7,'pr-progco-lp','AT/AT COMPATIBLE','DSK','A','5CD7174SVC','',1,'ProBook 455 G4','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(8,'mb-dircomser-lp','AT/AT COMPATIBLE','DSK','A','5CG9402PZ9','',1,'ProBook 640 G5','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(9,'pr-barb-lp','AT/AT COMPATIBLE','DSK','A','MP17G4W9','',1,'Lenovo ideapad FLEX 4-1470','Lenovo',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(10,'mb-s08','AT/AT COMPATIBLE','DSK','A','VMware-56 4d 87 9a 8f e1 00 e9-33 a4 f3 a5 45 9c ca 5f','',1,'VM','VMware',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(11,'mb-s09','AT/AT COMPATIBLE','DSK','A','VMware-56 4d aa 34 6a ed f0 e4-4b 7f 82 d3 b5 be 33 d5','',1,'VM','VMware',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(12,'mb-cbo-lp','AT/AT COMPATIBLE','PRT','A','5CG941BHTQ','',1,'ProBook 640 G5','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(13,'mb-5cg85238wk','AT/AT COMPATIBLE','PRT','A','5CG85238WK','',1,'ProBook 650 G4','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(14,'mb-mxl92136gt','AT/AT COMPATIBLE','PRT','A','MXL92136GT','',1,'ProDesk 400 G5 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(15,'mo-cdc','AT/AT COMPATIBLE','PRT','A','MXL92136GZ','',1,'ProDesk 400 G5 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(16,'mb-cao-assist','AT/AT COMPATIBLE','PRT','A','MXL92136FJ','',1,'ProDesk 400 G5 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(17,'mob-dominic','AT/AT COMPATIBLE','PRT','A','5CG925CL89','',1,'ProBook 640 G5','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(18,'pr-suzanne-lp','AT/AT COMPATIBLE','PRT','A','CNU402BQ4B','',1,'EliteBook 840 G1','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(19,'pr-counter','AT/AT COMPATIBLE','PRT','A','MXL0272B76','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(20,'mb-taxcollect-l','AT/AT COMPATIBLE','PRT','A','5CG94668Z1','',1,'ProBook 650 G4','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(21,'mb-daycaresup-l','AT/AT COMPATIBLE','PRT','A','5CG94668Z7','',1,'ProBook 650 G4','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(22,'mb-hr-lp2','AT/AT COMPATIBLE','PRT','A','5CD9512860','',1,'ProBook 450 G6','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(23,'pr-adminassist','AT/AT COMPATIBLE','PRT','A','MXL0272B9Q','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(24,'mo-counter-r','AT/AT COMPATIBLE','PRT','A','MXL0272BC0','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(25,'mo-counter-l','AT/AT COMPATIBLE','PRT','A','MXL0272BBZ','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(26,'mo-cao-lp','AT/AT COMPATIBLE','PRT','A','5CD039PNBR','',1,'ProBook 450 G7','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(27,'pr-fac-coord','AT/AT COMPATIBLE','PRT','A','MXL0272BBM','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(28,'mo-offassist','AT/AT COMPATIBLE','PRT','A','MXL0272B9T','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(29,'mo-clerk-lp','AT/AT COMPATIBLE','PRT','A','5CD039PN9B','',1,'ProBook 450 G7','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(30,'pr-maint','AT/AT COMPATIBLE','PRT','A','MXL0272B9S','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(31,'mo-buildclerk','AT/AT COMPATIBLE','PRT','A','MXL0272B9W','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(32,'fh-chief','AT/AT COMPATIBLE','PRT','A','MXL0272BBW','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(33,'mo-taxcollect','AT/AT COMPATIBLE','LPT','A','MXL0272BBP','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(34,'mo-payroll','AT/AT COMPATIBLE','LPT','A','MXL0272BBQ','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(35,'mo-taxclerk','AT/AT COMPATIBLE','LPT','A','MXL0272BBX','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(36,'mo-roads','AT/AT COMPATIBLE','LPT','A','MXL0272BB8','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(37,'mo-gis','AT/AT COMPATIBLE','LPT','A','MXL0272BBH','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(38,'fh-fpo','AT/AT COMPATIBLE','LPT','A','MXL0272BBL','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(39,'mo-katie-lp','AT/AT COMPATIBLE','LPT','A','5CD6211ZNL','',1,'ProBook 455 G3','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(40,'pr-matt-lp','AT/AT COMPATIBLE','LPT','A','5CD810887K','',1,'ProBook 455 G5','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(41,'fh-deputy','AT/AT COMPATIBLE','LPT','A','MXL0101HSK','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(42,'mo-cbo','AT/AT COMPATIBLE','LPT','A','MXL0272B9V','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(43,'mo-cfo-lp','AT/AT COMPATIBLE','LPT','A','5CD017HBT4','',1,'ProBook 450 G7','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(44,'mo-jrdepclerk','AT/AT COMPATIBLE','LPT','A','MXL0272BC2','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(45,'dc-staff','AT/AT COMPATIBLE','LPT','A','MXL0272B9Z','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(46,'dc-super','AT/AT COMPATIBLE','LPT','A','MXL0272BBC','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(47,'dc-admin','AT/AT COMPATIBLE','LPT','A','MXL0272BBN','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(48,'fh-training','AT/AT COMPATIBLE','LPT','A','MXL0101JFG','',1,'ProDesk 400 G6 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(49,'mb-8cg54735wc','CAO HP Revolve 810','CPH','A','8CG54735WC','',1,'EliteBook Revolve 810 G3','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(50,'mb-cao-lp','CAO Laptop','CPH','A','5CG8134GSW','',1,'EliteBook 840 G4','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(51,'mb-cfo','CFO','CPH','A','MXL5382SRC','',1,'ProDesk 400 G2.5 SFF','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(52,'dc-laptop','Child Care Laptop','CPH','A','LXTVW030880310E7752500','',1,'TravelMate 7740','Acer',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(53,'mo-confroom','Council Chambers','CPH','A','9M28WR1','',1,'OptiPlex 790','Dell',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(54,'mb-s03','Exchange 2013','CPH','A','VMware-56 4d 19 2b 31 6c 6b 93-fd 14 07 4d 90 a8 df c7','',1,'VM','VMware',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(55,'mb-s05','FileHold Server','CPH','A','VMware-56 4d a6 81 da 7c d5 9c-d4 ee 77 9d 72 97 0a d9','',1,'VM','VMware',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(56,'mb-s06','GIS,FS, PS','CPH','A','VMware-56 4d a4 91 f5 88 40 4e-88 a6 6e d4 bf 25 00 ce','',1,'VM','VMware',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(57,'mo-spare-revolv','HP Revolve 810','CPH','A','8CG54735X0','',1,'EliteBook Revolve 810 G3','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(58,'mo-spare2-revol','HP Revolve 810','CPH','A','8CG54735WD','',1,'EliteBook Revolve 810 G3','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(59,'mob-001-tab','John Strader Tablet','CPH','A','CND6250ZJV','',1,'ElitePad 1000 G2','Hewlett-Packard',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(60,'mb-s02','Keystone, EPO:SQe, FP2:PGr, StoneOr:SQe, SpiceW:SQe, FS','CPH','A','VMware-56 4d f2 ed f5 eb ca 69-64 c8 ef df 1a 24 2b a4','',1,'VM','VMware',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(61,'mb-s01','mb-s01 | AD:FSMO, DNS, DHCP','CPH','A','VMware-56 4d 96 96 0f 4c 73 cd-c0 06 94 8e d0 e8 b7 c8','',1,'VM','VMware',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(62,'mb-s04','RDS','CPH','A','VMware-56 4d d9 58 4e 54 ff 90-ba 24 00 7b 8c bf d3 df','',1,'VM','VMware',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28'),(63,'mb-943543853','Surface Pro (Operations Admin Assist)','CPH','A','943543853','',1,'Surface Pro 3','Microsoft',NULL,NULL,NULL,'dba','2021-06-23 21:50:16','2021-07-12 12:56:28');
/*!40000 ALTER TABLE `asset` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-16 15:33:21
