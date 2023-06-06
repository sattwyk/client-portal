CREATE TABLE `clients` (
	`client_id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` int,
	`name` varchar(100),
	`email` varchar(100),
	`phone` varchar(20),
	`address` varchar(200));
--> statement-breakpoint
CREATE TABLE `purchases` (
	`purchase_id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`client_id` int,
	`service_id` int,
	`purchased_at` text);
--> statement-breakpoint
CREATE TABLE `services` (
	`service_id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` int,
	`service_name` varchar(100),
	`description` text,
	`price` decimal(10,2),
	`created_at` text);
--> statement-breakpoint
CREATE TABLE `users` (
	`user_id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`stripe_account_id` varchar(100),
	`username` varchar(50),
	`password` varchar(100));
