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
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  shippingLine1 VARCHAR(100),
  shippingLine2 VARCHAR(50),
  shippingState CHAR(2),
  shippingZipCode INT(5),
  phoneNumber BigInt(11),
  PRIMARY KEY (id)
);


CREATE TABLE payment (
  id INT NOT NULL AUTO_INCREMENT,
  creditCard INT(20),
  expiryMonth CHAR(3),
  expiryYear INT(4),
  CVV INT(5),
  billingZipCode INT(5),
  PRIMARY KEY (id)
);