/*
 Navicat Premium Data Transfer

 Source Server         : Dashboard_CRM
 Source Server Type    : MySQL
 Source Server Version : 80037 (8.0.37)
 Source Host           : localhost:3306
 Source Schema         : crm_data

 Target Server Type    : MySQL
 Target Server Version : 80037 (8.0.37)
 File Encoding         : 65001

 Date: 14/06/2025 23:20:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for crm_v1_account
-- ----------------------------
DROP TABLE IF EXISTS `crm_v1_account`;
CREATE TABLE `crm_v1_account`  (
  `id` bigint NOT NULL COMMENT 'ID de la cuenta',
  `name` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL COMMENT 'Nombre de la compañía',
  `uri` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL COMMENT 'URI referencia de la compañía',
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'Fecha de creación',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_spanish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for crm_v1_leads
-- ----------------------------
DROP TABLE IF EXISTS `crm_v1_leads`;
CREATE TABLE `crm_v1_leads`  (
  `id` bigint NOT NULL COMMENT 'ID del lead',
  `account_id` bigint NOT NULL COMMENT 'Cuenta a la que pertenece el lead',
  `contact_id` bigint NOT NULL COMMENT 'Contacto relacionado al lead',
  `user_id` bigint NULL DEFAULT 0 COMMENT 'Usuario responsable del lead',
  `status` int NOT NULL DEFAULT 1 COMMENT 'Fase del lead',
  `source` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NULL DEFAULT NULL COMMENT 'De dónde proviene',
  `priority` enum('1','2','3') CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL DEFAULT '1' COMMENT 'Prioridad del lead',
  `notes` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NULL COMMENT 'Notas sobre el lead',
  `money` float NOT NULL DEFAULT 0 COMMENT 'Monto que aporta el lead',
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'Fecha de creación',
  PRIMARY KEY (`id`, `account_id`, `contact_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_spanish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for crm_v1_leads_contact
-- ----------------------------
DROP TABLE IF EXISTS `crm_v1_leads_contact`;
CREATE TABLE `crm_v1_leads_contact`  (
  `id` bigint NOT NULL COMMENT 'ID del contacto (lead)',
  `full_name` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL COMMENT 'Nombre del lead',
  `email` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL COMMENT 'Correo del lead',
  `phone` varchar(20) CHARACTER SET latin1 COLLATE latin1_spanish_ci NULL DEFAULT NULL COMMENT 'Teléfono del lead',
  `company` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NULL DEFAULT NULL COMMENT 'Compañía del lead',
  `position` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci NULL DEFAULT NULL COMMENT 'Posición del lead',
  `address` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NULL DEFAULT NULL COMMENT 'Dirección del lead',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_spanish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for crm_v1_leads_log
-- ----------------------------
DROP TABLE IF EXISTS `crm_v1_leads_log`;
CREATE TABLE `crm_v1_leads_log`  (
  `id` bigint NOT NULL COMMENT 'ID del log',
  `account_id` bigint NOT NULL COMMENT 'ID de la cuenta que hizo el log',
  `lead_id` bigint NOT NULL COMMENT 'ID del lead afectado',
  `user_id` bigint NOT NULL COMMENT 'Usuario que realiza la acción',
  `status` int NOT NULL COMMENT 'Estado en que se encuenta el lead',
  `action` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL COMMENT 'Acción realizada',
  `comment` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL COMMENT 'Descripción de la acción',
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'Fecha de creación',
  PRIMARY KEY (`id`, `account_id`, `lead_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_spanish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for crm_v1_users
-- ----------------------------
DROP TABLE IF EXISTS `crm_v1_users`;
CREATE TABLE `crm_v1_users`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'ID del usuario',
  `account_id` int NOT NULL COMMENT 'Cuenta a la que pertenece el usuario',
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Nombre del usuario',
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Correo del usuario',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Contraseña del usuario',
  `role` int NOT NULL DEFAULT 1 COMMENT 'Rol del usuario',
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'Fecha de creación',
  PRIMARY KEY (`id`, `account_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
