-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: showchef
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cocinero`
--

DROP TABLE IF EXISTS `cocinero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cocinero` (
  `idCocinero` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_c` varchar(100) DEFAULT NULL,
  `Apellido_c` varchar(100) DEFAULT NULL,
  `Email_c` varchar(150) DEFAULT NULL,
  `Password_c` varchar(100) DEFAULT NULL,
  `Provincia_c` varchar(100) DEFAULT NULL,
  `Ciudad_c` varchar(100) DEFAULT NULL,
  `Telefono_c` varchar(100) DEFAULT NULL,
  `FechaInicio_c` date DEFAULT NULL,
  `idRol_c` char(5) DEFAULT NULL,
  `Especialidad_c` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idCocinero`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cocinero`
--

LOCK TABLES `cocinero` WRITE;
/*!40000 ALTER TABLE `cocinero` DISABLE KEYS */;
INSERT INTO `cocinero` VALUES (1,'Rocio','Santos','Rocio@prueba','1234567899','Malaga','Marbella','625894454','2016-07-06','C','Italiana'),(2,'Bea','','Bea@prueba','1234567899','Malaga','Ricon de la Victoria','699894454','2016-08-17','C','Tahilandesa'),(3,'Juan','Almodovar','Juan@prueba','1234567899','Malaga','Estepona','635985615','2016-09-06','C','Mexicana');
/*!40000 ALTER TABLE `cocinero` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-29 18:33:16
