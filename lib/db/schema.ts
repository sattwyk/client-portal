import {
  mysqlTable,
  serial,
  text,
  varchar,
  int,
  decimal,
} from 'drizzle-orm/mysql-core';

export const clients = mysqlTable('clients', {
  client_id: serial('client_id').primaryKey(),
  user_id: int('user_id'),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 100 }),
  phone: varchar('phone', { length: 20 }),
  address: varchar('address', { length: 200 }),
});

export const users = mysqlTable('users', {
  user_id: serial('user_id').primaryKey(),
  stripe_account_id: varchar('stripe_account_id', { length: 100 }),
  username: varchar('username', { length: 50 }),
  password: varchar('password', { length: 100 }),
});

export const services = mysqlTable('services', {
  service_id: serial('service_id').primaryKey(),
  user_id: int('user_id'),
  service_name: varchar('service_name', { length: 100 }),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }),
  created_at: text('created_at'),
});

export const purchases = mysqlTable('purchases', {
  purchase_id: serial('purchase_id').primaryKey(),
  client_id: int('client_id'),
  service_id: int('service_id'),
  purchased_at: text('purchased_at'),
});
