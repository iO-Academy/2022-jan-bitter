-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: mySql_db_bittr:3307:3307
-- Generation Time: Apr 28, 2022 at 02:42 PM
-- Server version: 10.7.3-MariaDB-1:10.7.3+maria~focal
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
-- Table structure for table `bleats`
--

CREATE TABLE `bleats` (
  `id` int(11) NOT NULL,
  `bleat_user_id` char(36) NOT NULL,
  `bleat` varchar(255) NOT NULL,
  `bleat_time` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bleats`
--

INSERT INTO `bleats` (`id`, `bleat_user_id`, `bleat`, `bleat_time`) VALUES
(1, '994a373d-eaae-4dcd-b39a-b0bfe7e0f66a', 'bal bla bla ', 0),
(2, '994a373d-eaae-4dcd-b39a-b0bfe7e0f66a', 'bal bla bla ', 0),
(3, '994a373d-eaae-4dcd-b39a-b0bfe7e0f66a', 'it worked', 0),
(4, 'ef26ac69-533f-43b8-bdde-2c080e96aed6', 'my only bleat', 0),
(5, 'ef26ac69-533f-43b8-bdde-2c080e96aed6', 'my only bleat with time', 1651088433),
(6, 'ef26ac69-533f-43b8-bdde-2c080e96aed6', 'my bleat with time again', 1651088499),
(7, 'ef26ac69-533f-43b8-bdde-2c080e96aed6', 'my bleat with time again', 1651091643),
(8, 'ef26ac69-533f-43b8-bdde-2c080e96aed6', 'my bleat with time again', 1651091647),
(9, 'ef26ac69-533f-43b8-bdde-2c080e96aed6', 'my bleat with time again', 1651091649),
(10, 'ef26ac69-533f-43b8-bdde-2c080e96aed6', 'my bleat with time again', 1651091650),
(11, 'ef26ac69-533f-43b8-bdde-2c080e96aed6', 'new id', 1651092642);

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `id` int(11) NOT NULL,
  `user_id` char(36) NOT NULL,
  `username` char(36) NOT NULL,
  `user_bio` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`id`, `user_id`, `username`, `user_bio`) VALUES
(1, '176d1e13-36cf-4338-85e3-611234464345', 'maxwellius', 'hello, my name is max and this is my bio'),
(2, 'test_user_id', 'test_user_name', NULL),
(3, 'test_user_id', 'test_user_name', NULL),
(4, 'test_user_id', 'test_user_name', NULL),
(5, 'e2f392cf-113b-48bc-9e85-493dcdc2a64c', 'Ihopethisworks!', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bleats`
--
ALTER TABLE `bleats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bleats`
--
ALTER TABLE `bleats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
