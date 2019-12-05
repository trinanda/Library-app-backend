CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `loan` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `book_id` int,
  `deadline` datetime,
  `status` int NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `book` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `author` varchar(255),
  `publisher` varchar(255),
  `description` varchar(255),
  `category` varchar(255),
  `thumbnail` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

ALTER TABLE `loan` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `loan` ADD FOREIGN KEY (`book_id`) REFERENCES `book` (`id`);
