DROP DATABASE IF EXISTS checkout;

CREATE DATABASE IF NOT EXISTS checkout;

use checkout;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(35) NOT NULL,
  lastname VARCHAR(35) NOT NULL,
  shippingLine1 VARCHAR(100) NOT NULL,
  shippingLine2 VARCHAR(50),
  shippingState CHAR(2) NOT NULL,
  shippingZipCode INT(5) NOT NULL,
  phoneNumber BigInt(11) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE login (
  id INT NOT NULL AUTO_INCREMENT,
  loginName VARCHAR(50) NOT NULL,
  loginPassword VARCHAR(50) NOT NULL,
  sessionId VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (users_id)
)

CREATE TABLE payment {
  id INT NOT NULL AUTO_INCREMENT,
  creditCard INT(20) NOT NULL,
  expiryMonth CHAR(3) NOT NULL,
  expiryYear INT(4) NOT NULL,
  CVV INT(5) NOT NULL,
  billingZipCode INT(5) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (users_id)
}