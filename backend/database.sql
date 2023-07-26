-- _____________________________________________ CREATE TABLES _____________________________________________
DROP TABLE IF EXISTS `language`;
CREATE TABLE `language` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `game`;
CREATE TABLE `game` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `thumbnail` VARCHAR(255) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `upload_date` DATETIME NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NULL,
    `status` VARCHAR(255) DEFAULT "online",
    `seo` VARCHAR(255) DEFAULT "",
    `thumbnail` VARCHAR(255) NOT NULL,
    `url_video` VARCHAR(255) NOT NULL,
    `is_promoted` TINYINT UNSIGNED DEFAULT 0,
    -- 'visibility' controls which user (not connected, connected with plan...) can access the videos
    -- 0: all users
    -- 1: connected w OR w/o plan (freemium)
    -- 2: connected with plan (premium)
    `visibility` TINYINT UNSIGNED DEFAULT 0,
    `game_id` INT DEFAULT NULL,
    CONSTRAINT fk_video_game FOREIGN KEY (`game_id`)
        REFERENCES `game` (`id`)
         ON DELETE SET NULL,
    `language_id` INT DEFAULT NULL,
    CONSTRAINT fk_video_language FOREIGN KEY (`language_id`)
        REFERENCES `language` (`id`)
         ON DELETE SET NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `user_type`;
CREATE TABLE `user_type` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    -- 'role' controls user privileges
    -- 0: common user
    -- 1: admin
    `is_admin` TINYINT NOT NULL DEFAULT 0
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `plan`;
CREATE TABLE `plan` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `price_monthly` DECIMAL(10 , 2 ) NOT NULL,
    `price_yearly` DECIMAL(10 , 2 ) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `perk_1` VARCHAR(255) NOT NULL,
    `perk_2` VARCHAR(255) NOT NULL,
    `perk_3` VARCHAR(255) NOT NULL,
    `perk_4` VARCHAR(255) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(150) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `pseudo` VARCHAR(150) NULL,
    `plan_id` INT DEFAULT NULL,
    CONSTRAINT fk_user_plan FOREIGN KEY (`plan_id`)
        REFERENCES `plan` (`id`),
    `user_type_id` INT DEFAULT 1,
    CONSTRAINT fk_user_user_type FOREIGN KEY (`user_type_id`)
        REFERENCES `user_type` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `user_video`;
CREATE TABLE `user_video` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `user_id` INT DEFAULT NULL,
    CONSTRAINT fk_user_video FOREIGN KEY (`user_id`)
        REFERENCES `user` (`id`)
        ON DELETE SET NULL,
    `video_id` INT DEFAULT NULL,
    CONSTRAINT fk_video_user FOREIGN KEY (`video_id`)
        REFERENCES `video` (`id`)
        ON DELETE SET NULL,
    `is_favorite` TINYINT UNSIGNED DEFAULT 0
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `video_category`;
CREATE TABLE `video_category` (
    `video_id` INT DEFAULT NULL,
    CONSTRAINT fk_video_category FOREIGN KEY (`video_id`)
        REFERENCES `video` (`id`)
        ON DELETE SET NULL,
    `category_id` INT DEFAULT NULL,
    CONSTRAINT fk_category_video FOREIGN KEY (`category_id`)
        REFERENCES `category` (`id`)
         ON DELETE SET NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

-- _____________________________________________ POPULATE TABLES _____________________________________________
-- Create user types
INSERT INTO `user_type` (`is_admin`) 
VALUES
(0),
(1);

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
('apex', '../assets/games/Apex.jpg'),
('call of duty', '../assets/games/CallOfDuty.jpg'),
('chess', '../assets/games/Chess.jpg'),
('counter strike', '../assets/games/CounterStrike.jpg'),
('dota', '../assets/games/Dota2.jpg'),
('fifa 23', '../assets/games/Fifa23.jpg'),
('fortnite', '../assets/games/Fortnite.jpg'),
('hearth stone', '../assets/games/HearthStone.jpg'),
('league of legend', '../assets/games/LeagueOfLegends.jpg'),
('madden 23', '../assets/games/Madden23.jpg'),
('nba 23', '../assets/games/NBA2K23.jpg'),
('overwatch 2', '../assets/games/Overwatch2.jpg'),
('rocket league', '../assets/games/RocketLeague.jpg'),
('starcraft 2', '../assets/games/StarCraft2.jpg'),
('street fighter', '../assets/games/StreetFighter.jpg'),
('super smash bros', '../assets/games/SuperSmashBros.jpg'),
('tekken', '../assets/games/Tekken.jpg'),
('valorant', '../assets/games/Valorant.jpg');

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
('starter', 9, 99, 'Unleash the power of VOD', 'Limited to 1 user', 'No ads interruption', 'High quality video', 'Cancel anytime'),
('standard', 14, 159, 'Best deal for amateurs of e-sport', 'Up to 3 users', 'Multi-devices', 'High quality video', 'Cancel anytime'),
('premium', 19, 219, 'For the real fans of e-sport', 'Up to 5 users', 'Multi-devices', 'Premium quality video', 'Cancel anytime');

-- Create users
INSERT INTO `user` (`email`, `password`, `pseudo`, `plan_id`, `user_type_id`) 
VALUES
('user_freemium@gmail.com', '$argon2id$v=19$m=19893.36898592844,t=2,p=1$y/F65lSZ40xAVxes2YWvPw$4GTu0y5B2DnzDWVe93u/ai5vI5+9yU8yoB2tNKQC678', 'freemium', 1, 1),
('user_premium@gmail.com', '$argon2id$v=19$m=19893.36898592844,t=2,p=1$yqlfBNhiugXAFJy6wVY17Q$l7x0JTBsOjLch9YzWSGPwRtlO7w+ZC/SybDqtOk+2VQ', 'premium', 3, 1),
('admin@gmail.com', '$argon2id$v=19$m=19893.36898592844,t=2,p=1$RzN1/toefZqgTmUm3YSIDA$PevcNEmCjdb63rOjUtrhoCcdTQRwsHHCrZNNaT3yq48', 'admin', null, 2);

-- Create video
INSERT INTO `video` (`title`, `upload_date`, `description`, `slug`, `status`, `thumbnail`, `url_video`, `is_promoted`, `visibility`, `game_id`, `language_id`) 
VALUES 
('LIP WITH A SPICY SYMMETRA 💥 | OWL TOP 5', '2023-06-26' , 'Welcome to Top 5 Plays, where were highlighting the five craziest plays each week of the #OWL2023 season! Which one holds your #1 spot? Let us know in the comments!', '', 'online', './assets/videos/overwatch.png', 'https://www.youtube.com/watch?v=tF2ss2mU-Yc', 1, 2, 12, 1),
('Mull it Over - Ping Mage - Masters Tour: Maw and Disorder', '2023-06-26', 'Subscribe!' , '', 'online', './assets/videos/hearthstone1.png', 'https://www.youtube.com/watch?v=pIT4uWcfy54', 1, 1, 8, 1),
('PSG LGD vs ASTER - BEST DPC CHINA TEAM! - DPC 2023 CN SUMMER TOUR 3 Dota 2 Highlights', '2023-06-26' , 'DOTA 2 PSG LGD vs ASTER - BEST DPC CHINA TEAM! - DOTA 2 DPC 2023 CHINA SUMMER TOUR 3 DPC Dota 2 Highlights 2023 Tournament - Week 3 DPC CN Division 1', '', 'online', './assets/videos/dota.png', 'https://www.youtube.com/watch?v=aG15JM07Dt4', 1, 0, 5, 1),
('TSM vs Disguised Highlights | Challengers League: North America 2023', '2023-06-26' , 'Subscribe for More Professional Valorant Content , Road to 200k Subscribers.', '', 'online', './assets/videos/valorant2.png', 'https://www.youtube.com/watch?v=PiOfqf6RFPk', 1, 1, 18, 1),
('LOUD vs FURIA All Maps | Valorant Champions Tour 2023: Americas League', '2023-06-26' , 'Subscribe for More Professional Valorant Content , Road to 200k Subscribers.', '', 'online', './assets/videos/valorant1.png', 'https://www.youtube.com/watch?v=acs0y78XG7s', 1, 0, 18, 1),
('ASTER vs 9 PANDAS - SUMAIL vs RAMZSES666 - DREAMLEAGUE 2023 S20 Dota 2 Highlights', '2023-06-26' , 'DOTA 2 ASTER vs 9 PANDAS - SUMAIL vs RAMZSES666 - DREAMLEAGUE SEASON 20 2023 Dota 2 Highlights Tournament 2023 - Group Stage 1 Group B Bo2 #dota2', '', 'online', './assets/videos/astervspandas.png', 'https://www.youtube.com/watch?v=NrQcIBzBSTk', 0, 1, 5, 1),
('Dota2 - Gladiators vs Team Aster - Game 2 - DreamLeague Season 20 - Group B', '2023-06-26' , 'All about the DreamLeague Season 20', '', 'online', './assets/videos/gladiatorsvsaster.png', 'https://www.youtube.com/watch?v=9qAs3EaZzQ0', 0, 0, 5, 1),
('Master Moments Ep. 2 | FIFA 22 Ft. DUX Gravesen', '2023-06-26' , 'Watch Gravesen take a trip down memory lane to revisit some of his best FIFA 22 eSports moments.', '', 'online', './assets/videos/fifa.png', 'https://www.youtube.com/watch?v=yjaBoDvWe_Y', 0, 1, 6, 1),
('😨 IL DÉCOUVRE 2 NOUVELLES ROTAS COMPLÈTEMENT FOLLES ?!! 😱 | BEST OF FORTNITE #15', '2023-06-26' , '😨 IL DÉCOUVRE 2 NOUVELLES ROTAS COMPLÈTEMENT BROKEN ?!! 😱 | BEST OF FORTNITE #15', '', 'online', './assets/videos/fortnite.png', 'https://www.youtube.com/watch?v=Gw3lMBveOHA', 0, 0, 7, 1),
('Raptors Uprising GC vs Knicks Gaming - 5v5 Full Highlights | THE TIPOFF | May 30, 2023', '2023-06-26' , 'The 2023 Season is here live from D.C.!', '', 'online', './assets/videos/nba.png', 'https://www.youtube.com/watch?v=prCd0aZeTmA', 0, 1, 11, 1),
('14 Top Madden Plays of 2022! | MCS | Madden 23', '2023-06-26' , 'Here are the top plays from the past year. Which play do you think is the crème de la crème of 2022!? ', '', 'online', './assets/videos/madden.png', 'https://www.youtube.com/watch?v=E3XrsWwuxxE', 0, 0, 10, 1),
('Top 10 Plays | EU Spring Cup', '2023-06-26' , 'The RLCS European Spring Cup was on fire with tons of top-notch goals and incredible team plays, but which of them stood out among the crowd? Watch now and find out!', '', 'online', './assets/videos/rocketleague.png', 'https://www.youtube.com/watch?v=_HXFCrf0xbg', 0, 1, 13, 1),
('Manon (Damascus) vs Blanka (Tyrant) - Street Fighter 6 Gameplay', '2023-06-26' , 'We had some quick FT1s before our session was up, so enjoy these battles between Reversal team mates!', '', 'online', './assets/videos/streetfighter.png', 'https://www.youtube.com/watch?v=MRxTHkJd0u8', 0, 0, 15, 1),
('DRX Knee (Steve/Feng) vs GOBACK Chand NY (Leo) - 2023 TWT Masters - BAM 13 2023: Winners Semifinals', '2023-06-26' , 'Follow us!', '', 'online', './assets/videos/tekken.png', 'https://www.youtube.com/watch?v=7mWWqyXvMiQ',0, 1, 17, 1),
('Show Me Your Moose Losers Semis - DannyDVito (Young Link) Vs. Big Stew (Kazuya) Smash Ultimate - SSB', '2023-06-26' , 'Show Me Your Moose is a Super Smash Bros Ultimate Tournament in Wasilla, Arkansas.', '', 'online', './assets/videos/smash.png', 'https://www.youtube.com/watch?v=fb7GtosBk9M', 0, 0, 16, 1),
('Simp And Abezy Ace BACK TO BACK 💥 | Best of the Week - Major V Week 2', '2023-06-26' , 'Check out the best plays from Week 2 of the Major V Qualifiers, presented by Monster Energy. Which was your favorite? 👀', '', 'online', './assets/videos/cod.png', 'https://www.youtube.com/watch?v=HCFPBZLt-pg', 0, 1, 2, 1),
('NA Regional CHAMPIONS! ALGS Winners’ POV | DarkZero | Year 3 Split 2 | Apex Legends', '2023-06-26' , 'Drop into the POV of our NA Regional Champions DarkZero as they secured the win on Match Point during Game 8.', '', 'online', './assets/videos/apex.png', 'https://www.youtube.com/watch?v=yfoJtqE5b-s', 0, 0, 1, 1),
('OG vs NIP - MAP 1 P2 - 1/4 de finale - ESL Pro League S14', '2023-07-12', 'Broadcasted live on Twitch -- Watch live at https://www.twitch.tv/esl_csgo_fr', '', 'online', './assets/videos/CS.png', 'https://www.youtube.com/watch?v=Q_sOW9H6tGU', 0, 1, 4, 2 ),
('LoL - Saminos - Quadruplé Varus', '2023-07-12', '', '', 'online', './assets/videos/lol.jpg', 'https://www.youtube.com/watch?v=RppjAidXdXY', 0, 1, 9, 2);

-- Create user_video
INSERT INTO `user_video` (`user_id`, `video_id`, `is_favorite`) 
VALUES
(1, 2, 1),
(1, 7, 1),
(1, 8, 1),
(1, 11, 1),
(1, 15, 1),
(2, 1, 0),
(2, 5, 1),
(2, 8, 1),
(2, 10, 1),
(2, 15, 1),
(3, 1, 1);

-- Create video_category
INSERT INTO `video_category` (`video_id`, `category_id`) 
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 1),
(5, 1),
(6, 3),
(7, 3),
(8, 6),
(9, 1),
(10, 6),
(11, 6),
(12, 4),
(13, 2),
(14, 2),
(15, 2),
(16, 1),
(17, 1),
(18, 1),
(19, 3);