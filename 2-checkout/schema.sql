DROP DATABASE IF EXISTS checkout;

CREATE DATABASE IF NOT EXISTS checkout;

use checkout;

CREATE TABLE login (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  loginEmail VARCHAR(50),
  loginPassword VARCHAR(50),
  sessionId VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  fullName VARCHAR(100),
  shippingLine1 VARCHAR(100),
  shippingLine2 VARCHAR(50),
  city VARCHAR(50),
  shippingState VARCHAR(2),
  shippingZipCode VARCHAR(5),
  email VARCHAR(100),
  phoneNumber VARCHAR(11),
  sessionId VARCHAR(100),
  PRIMARY KEY (id)
);


CREATE TABLE payment (
  paymentId INT NOT NULL AUTO_INCREMENT,
  cardName VARCHAR(100),
  creditCard VARCHAR(20),
  expiryMonth VARCHAR(2),
  expiryYear VARCHAR(4),
  CVV VARCHAR(5),
  billingZipCode VARCHAR(5),
  sessionId VARCHAR(100),
  PRIMARY KEY (paymentId)
);