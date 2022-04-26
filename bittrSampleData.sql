-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Apr 26, 2022 at 11:58 AM
-- Server version: 5.7.37
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bittr`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_auth_recipe_users`
--

CREATE TABLE `all_auth_recipe_users` (
  `user_id` char(36) NOT NULL,
  `recipe_id` varchar(128) NOT NULL,
  `time_joined` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `emailpassword_pswd_reset_tokens`
--

CREATE TABLE `emailpassword_pswd_reset_tokens` (
  `user_id` char(36) NOT NULL,
  `token` varchar(128) NOT NULL,
  `token_expiry` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `emailpassword_users`
--

CREATE TABLE `emailpassword_users` (
  `user_id` char(36) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password_hash` varchar(128) NOT NULL,
  `time_joined` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `emailverification_tokens`
--

CREATE TABLE `emailverification_tokens` (
  `user_id` varchar(128) NOT NULL,
  `email` varchar(256) NOT NULL,
  `token` varchar(128) NOT NULL,
  `token_expiry` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `emailverification_verified_emails`
--

CREATE TABLE `emailverification_verified_emails` (
  `user_id` varchar(128) NOT NULL,
  `email` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jwt_signing_keys`
--

CREATE TABLE `jwt_signing_keys` (
  `key_id` varchar(255) NOT NULL,
  `key_string` text NOT NULL,
  `algorithm` varchar(10) NOT NULL,
  `created_at` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `key_value`
--

CREATE TABLE `key_value` (
  `name` varchar(128) NOT NULL,
  `value` text,
  `created_at_time` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `passwordless_codes`
--

CREATE TABLE `passwordless_codes` (
  `code_id` char(36) NOT NULL,
  `device_id_hash` char(44) NOT NULL,
  `link_code_hash` char(44) NOT NULL,
  `created_at` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `passwordless_devices`
--

CREATE TABLE `passwordless_devices` (
  `device_id_hash` char(44) NOT NULL,
  `email` varchar(256) DEFAULT NULL,
  `phone_number` varchar(256) DEFAULT NULL,
  `link_code_salt` char(44) NOT NULL,
  `failed_attempts` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `passwordless_users`
--

CREATE TABLE `passwordless_users` (
  `user_id` char(36) NOT NULL,
  `email` varchar(256) DEFAULT NULL,
  `phone_number` varchar(256) DEFAULT NULL,
  `time_joined` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `session_access_token_signing_keys`
--

CREATE TABLE `session_access_token_signing_keys` (
  `created_at_time` bigint(20) UNSIGNED NOT NULL,
  `value` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `session_info`
--

CREATE TABLE `session_info` (
  `session_handle` varchar(255) NOT NULL,
  `user_id` varchar(128) NOT NULL,
  `refresh_token_hash_2` varchar(128) NOT NULL,
  `session_data` text,
  `expires_at` bigint(20) UNSIGNED NOT NULL,
  `created_at_time` bigint(20) UNSIGNED NOT NULL,
  `jwt_user_payload` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `thirdparty_users`
--

CREATE TABLE `thirdparty_users` (
  `third_party_id` varchar(28) NOT NULL,
  `third_party_user_id` varchar(128) NOT NULL,
  `user_id` char(36) NOT NULL,
  `email` varchar(256) NOT NULL,
  `time_joined` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_metadata`
--

CREATE TABLE `user_metadata` (
  `user_id` varchar(128) NOT NULL,
  `user_metadata` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_auth_recipe_users`
--
ALTER TABLE `all_auth_recipe_users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `all_auth_recipe_users_pagination_index` (`time_joined`,`user_id`);

--
-- Indexes for table `emailpassword_pswd_reset_tokens`
--
ALTER TABLE `emailpassword_pswd_reset_tokens`
  ADD PRIMARY KEY (`user_id`,`token`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `emailpassword_password_reset_token_expiry_index` (`token_expiry`);

--
-- Indexes for table `emailpassword_users`
--
ALTER TABLE `emailpassword_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `emailverification_tokens`
--
ALTER TABLE `emailverification_tokens`
  ADD PRIMARY KEY (`user_id`,`email`,`token`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `emailverification_tokens_index` (`token_expiry`);

--
-- Indexes for table `emailverification_verified_emails`
--
ALTER TABLE `emailverification_verified_emails`
  ADD PRIMARY KEY (`user_id`,`email`);

--
-- Indexes for table `jwt_signing_keys`
--
ALTER TABLE `jwt_signing_keys`
  ADD PRIMARY KEY (`key_id`);

--
-- Indexes for table `key_value`
--
ALTER TABLE `key_value`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `passwordless_codes`
--
ALTER TABLE `passwordless_codes`
  ADD PRIMARY KEY (`code_id`),
  ADD UNIQUE KEY `link_code_hash` (`link_code_hash`),
  ADD KEY `device_id_hash` (`device_id_hash`),
  ADD KEY `passwordless_codes_created_at_index` (`created_at`);

--
-- Indexes for table `passwordless_devices`
--
ALTER TABLE `passwordless_devices`
  ADD PRIMARY KEY (`device_id_hash`),
  ADD KEY `passwordless_devices_email_index` (`email`),
  ADD KEY `passwordless_devices_phone_number_index` (`phone_number`);

--
-- Indexes for table `passwordless_users`
--
ALTER TABLE `passwordless_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- Indexes for table `session_access_token_signing_keys`
--
ALTER TABLE `session_access_token_signing_keys`
  ADD PRIMARY KEY (`created_at_time`);

--
-- Indexes for table `session_info`
--
ALTER TABLE `session_info`
  ADD PRIMARY KEY (`session_handle`);

--
-- Indexes for table `thirdparty_users`
--
ALTER TABLE `thirdparty_users`
  ADD PRIMARY KEY (`third_party_id`,`third_party_user_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `user_metadata`
--
ALTER TABLE `user_metadata`
  ADD PRIMARY KEY (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `emailpassword_pswd_reset_tokens`
--
ALTER TABLE `emailpassword_pswd_reset_tokens`
  ADD CONSTRAINT `emailpassword_pswd_reset_tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `emailpassword_users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `passwordless_codes`
--
ALTER TABLE `passwordless_codes`
  ADD CONSTRAINT `passwordless_codes_ibfk_1` FOREIGN KEY (`device_id_hash`) REFERENCES `passwordless_devices` (`device_id_hash`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
