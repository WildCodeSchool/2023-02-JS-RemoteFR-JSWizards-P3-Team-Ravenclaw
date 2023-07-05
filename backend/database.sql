-- SQLBook: Code
--  _____________________________________________ CREATE TABLES _____________________________________________  
DROP TABLE IF EXISTS `language`;
CREATE TABLE `language` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `game`;
CREATE TABLE `game` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `thumbnail` VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `upload_date` DATE NOT NULL,
  `description` VARCHAR(255) NULL,
  `slug` VARCHAR(255) NULL,
  `status` VARCHAR(255) NOT NULL,
  `thumbnail` VARCHAR(255) NOT NULL,
  `url_video` VARCHAR(255) NOT NULL,
  `is_promoted` TINYINT DEFAULT 0,
	-- 'visibility' controls which user (not connected, connected with plan...) can access the videos
  -- 0: all users
  -- 1: connected w/o plan
  -- 2: connected with plan
  `visibility` TINYINT DEFAULT 0,
	`game_id` INT NOT NULL,
  CONSTRAINT fk_video_game FOREIGN KEY (`game_id`) REFERENCES `game`(`id`),
	`language_id` INT NOT NULL,
  CONSTRAINT fk_video_language FOREIGN KEY (`language_id`) REFERENCES `language`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `user_type`;
CREATE TABLE `user_type` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `plan`;
CREATE TABLE `plan` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `price_monthly` DECIMAL(10,2) NOT NULL,
  `price_yearly` DECIMAL(10,2) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `perk_1` VARCHAR(255) NOT NULL,
  `perk_2` VARCHAR(255) NOT NULL,
  `perk_3` VARCHAR(255) NOT NULL,
  `perk_4` VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(150) NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  `pseudo` VARCHAR(150) NOT NULL,
  `plan_id` INT NULL,
  CONSTRAINT fk_user_plan FOREIGN KEY (`plan_id`) REFERENCES `plan`(`id`),
	`user_type_id` INT NOT NULL,
  CONSTRAINT fk_user_user_type FOREIGN KEY (`user_type_id`) REFERENCES `user_type`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `user_video`;
CREATE TABLE `user_video` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  CONSTRAINT fk_user_video FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
	`video_id` INT NULL,
  CONSTRAINT fk_video_user FOREIGN KEY (`video_id`) REFERENCES `video`(`id`),
  `is_favorite` BOOL NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `video_category`;
CREATE TABLE `video_category` (
  `video_id` INT NOT NULL,
  CONSTRAINT fk_video_category FOREIGN KEY (`video_id`) REFERENCES `video`(`id`),
	`category_id` INT NOT NULL,
  CONSTRAINT fk_category_video FOREIGN KEY (`category_id`) REFERENCES `category`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

--  _____________________________________________ POPULAR TABLES _____________________________________________  
-- Create roles
INSERT INTO `user_type` (`role`) 
VALUES
('admin'),
('user');

-- Create admin
INSERT INTO `user` (`email`, `password`, `pseudo`, `user_type_id`) 
VALUES ('admin@gmail.com', 'admin', 'admin', 1);

-- Create categories
INSERT INTO `category` (`name`) 
VALUES 
('fps'),
('action'),
('moba'),
('racing'),
('table game'),
('sport');

-- Create games
INSERT INTO `game` (`name`, `thumbnail`) 
VALUES 
('apex', './assets/games/Apex.jpg'),
('call of duty', './assets/games/CallOfDuty.jpg'),
('chess', './assets/games/Chess.jpg'),
('counter strike', './assets/games/CounterStrike.jpg'),
('dota', './assets/games/Dota2.jpg'),
('fifa 23', './assets/games/Fifa23.jpg'),
('fortnite', './assets/games/Fortnite.jpg'),
('hearth stone', './assets/games/HearthStone.jpg'),
('league of legend', './assets/games/LeagueOfLegends.jpg'),
('madden 23', './assets/games/Madden23.jpg'),
('nba 23', './assets/games/NBA2K23.jpg'),
('overwatch 2', './assets/games/Overwatch2.jpg'),
('rocket league', './assets/games/RocketLeague.jpg'),
('starcraft 2', './assets/games/StarCraft2.jpg'),
('street fighter', './assets/games/StreetFighter.jpg'),
('super smash bros', './assets/games/SuperSmashBros.jpg'),
('tekken', './assets/games/Tekken.jpg'),
('valorant', './assets/games/Valorant.jpg');

-- Create languages
INSERT INTO `language` (`name`) 
VALUES 
('english'),
('french'),
('italian'),
('korean'),
('german'),
('spanish'),
('chinese');

-- Create plans
INSERT INTO `plan` (`name`, `price_monthly`, `price_yearly`, `description`, `perk_1`, `perk_2`, `perk_3`, `perk_4`) 
VALUES
('starter', 9, 99, 'Unleash the power of on-demand video', 'Limited to 1 user', 'No ads interruption', 'High quality video', 'Cancel anytime'),
('standard', 14, 159, 'Best deal for amateurs of e-sport', 'Up to 3 users', 'Multi-devices', 'High quality video', 'Cancel anytime'),
('premium', 19, 219, 'For the real fans of e-sport', 'Up to 5 users', 'Multi-devices', 'Premium quality video', 'Cancel anytime');

-- Create video
INSERT INTO `video` (`title`, `upload_date`, `description`, `slug`, `status`, `thumbnail`, `url_video`, `is_promoted`, `game_id`, `language_id`) 
VALUES 
('LIP WITH A SPICY SYMMETRA 💥 | OWL TOP 5', '2023-06-26' , '', '', 'offline', './assets/videos/overwatch.png', 'https://www.youtube.com/watch?v=tF2ss2mU-Yc', '1', '12' , '1'),
('Mull it Over - Ping Mage - Masters Tour: Maw and Disorder', '2023-06-26', '' , '', 'offline', './assets/videos/hearthstone1.png', 'https://www.youtube.com/watch?v=pIT4uWcfy54', '1', '8' , '1'),
('PSG LGD vs ASTER - BEST DPC CHINA TEAM! - DPC 2023 CN SUMMER TOUR 3 Dota 2 Highlights', '2023-06-26' , '', '', 'offline', './assets/videos/dota.png', 'https://www.youtube.com/watch?v=aG15JM07Dt4', '1', '5' , '1'),
('TSM vs Disguised Highlights | Challengers League: North America 2023', '2023-06-26' , '', '', 'offline', './assets/videos/valorant2.png', 'https://www.youtube.com/watch?v=PiOfqf6RFPk', '1', '18' , '1'),
('LOUD vs FURIA All Maps | Valorant Champions Tour 2023: Americas League', '2023-06-26' , '', '', 'offline', './assets/videos/valorant1.png', 'https://www.youtube.com/watch?v=acs0y78XG7s', '1', '18' , '1'),
('ASTER vs 9 PANDAS - SUMAIL vs RAMZSES666 - DREAMLEAGUE 2023 S20 Dota 2 Highlights', '2023-06-26' , '', '', 'offline', './assets/videos/astervspandas.png', 'https://www.youtube.com/watch?v=NrQcIBzBSTk', '0', '5' , '1'),
('Dota2 - Gladiators vs Team Aster - Game 2 - DreamLeague Season 20 - Group B', '2023-06-26' , '', '', 'offline', './assets/videos/gladiatorsvsaster.png', 'https://www.youtube.com/watch?v=9qAs3EaZzQ0', '0', '5' , '1'),
('Master Moments Ep. 2 | FIFA 22 Ft. DUX Gravesen', '2023-06-26' , '', '', 'offline', './assets/videos/fifa.png', 'https://www.youtube.com/watch?v=yjaBoDvWe_Y', '0', '6', '1'),
('😨 IL DÉCOUVRE 2 NOUVELLES ROTAS COMPLÈTEMENT FOLLES ?!! 😱 | BEST OF FORTNITE #15', '2023-06-26' , '', '', 'offline', './assets/videos/fortnite.png', 'https://www.youtube.com/watch?v=Gw3lMBveOHA', '0', '7' , '1'),
('Raptors Uprising GC vs Knicks Gaming - 5v5 Full Highlights | THE TIPOFF | May 30, 2023', '2023-06-26' , '', '', 'offline', './assets/videos/nba.png', 'https://www.youtube.com/watch?v=prCd0aZeTmA', '0', '11' , '1'),
('14 Top Madden Plays of 2022! | MCS | Madden 23', '2023-06-26' , '', '', 'offline', './assets/videos/madden.png', 'https://www.youtube.com/watch?v=E3XrsWwuxxE', '0', '10' , '1'),
('Top 10 Plays | EU Spring Cup', '2023-06-26' , '', '', 'offline', './assets/videos/rocketleague.png', 'https://www.youtube.com/watch?v=_HXFCrf0xbg', '0','13' , '1'),
('Manon (Damascus) vs Blanka (Tyrant) - Street Fighter 6 Gameplay', '2023-06-26' , '', '', 'offline', './assets/videos/streetfighter.png', 'https://www.youtube.com/watch?v=MRxTHkJd0u8', '0', '15' , '1'),
('DRX Knee (Steve/Feng) vs GOBACK Chand NY (Leo) - 2023 TWT Masters - BAM 13 2023: Winners Semifinals', '2023-06-26' , '', '', 'offline', './assets/videos/tekken.png', 'https://www.youtube.com/watch?v=7mWWqyXvMiQ','0', '17' , '1'),
('Show Me Your Moose Losers Semis - DannyDVito (Young Link) Vs. Big Stew (Kazuya) Smash Ultimate - SSB', '2023-06-26' , '', '', 'offline', './assets/videos/smash.png', 'https://www.youtube.com/watch?v=fb7GtosBk9M', '0', '16' , '1'),
('Simp And Abezy Ace BACK TO BACK 💥 | Best of the Week - Major V Week 2', '2023-06-26' , '', '', 'offline', './assets/videos/cod.png', 'https://www.youtube.com/watch?v=HCFPBZLt-pg', '0', '2' , '1'),
('NA Regional CHAMPIONS! ALGS Winners’ POV | DarkZero | Year 3 Split 2 | Apex Legends', '2023-06-26' , '', '', 'offline', './assets/videos/apex.png', 'https://www.youtube.com/watch?v=yfoJtqE5b-s', '0', '1' , '1');
