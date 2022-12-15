CREATE DATABASE dblogistica;

USE dblogistica;

SET time_zone = '-03:00';

CREATE TABLE clientes (
  id_cliente int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre_cliente varchar(50) NOT NULL,
  numero_documento int(10) NOT NULL,
  direccion varchar(50) NOT NULL,
  localidad varchar(50) NOT NULL,
  provincia varchar(50) NOT NULL,
  codigo_postal int(4) NOT NULL,
  telefono int(10) NOT NULL,
  correo_electronico varchar(50) UNIQUE NOT NULL,
  password varchar(50) NOT NULL
);

CREATE TABLE envios (
  id_envio int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  peso int(2) NOT NULL,
  alto int(2) NOT NULL,
  ancho int(2) NOT NULL,
  largo int(2) NOT NULL,
  costo_referencia int(10) NOT NULL,
  provincia_origen varchar(50) NOT NULL,
  sucursal_origen varchar(50) NOT NULL,
  tipo_envio varchar(50) NOT NULL,
  metodo_pago varchar(50) NOT NULL,
  estado ENUM("COMPLETADO", "CANCELADO", "ENTREGADO") NOT NULL DEFAULT "COMPLETADO",
  fecha TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE destinatarios (
  id_destinatario int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre_destinatario varchar(50) NOT NULL,
  numero_documento int(10) DEFAULT NULL,
  direccion varchar(50) DEFAULT NULL,
  localidad varchar(50) DEFAULT NULL,
  provincia varchar(50) NOT NULL,
  codigo_postal int(4) DEFAULT NULL,
  telefono int(10) NOT NULL,
  correo_electronico varchar(50) NOT NULL,
  observaciones text DEFAULT NULL,
  sucursal varchar(50) DEFAULT NULL
);

CREATE TABLE detalle_envios (
  id_detalle_envio int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_cliente int(10) NOT NULL,
  id_destinatario int(10) NOT NULL,
  id_envio int(10) NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente),
  FOREIGN KEY (id_destinatario) REFERENCES destinatarios (id_destinatario),
  FOREIGN KEY (id_envio) REFERENCES envios (id_envio)
);

CREATE TABLE province (
  id_province int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name_province varchar(255) NOT NULL
);


INSERT INTO province (id_province, name_province) VALUES
(1, 'Buenos Aires'),
(2, 'Capital Federal'),
(3, 'Catamarca'),
(4, 'Chaco'),
(5, 'Chubut'),
(6, 'Córdoba'),
(7, 'Corrientes'),
(8, 'Entre Ríos'),
(9, 'Formosa'),
(10, 'Jujuy'),
(11, 'La Pampa'),
(12, 'La Rioja'),
(13, 'Mendoza'),
(14, 'Misiones'),
(15, 'Neuquén'),
(16, 'Río Negro'),
(17, 'Salta'),
(18, 'San Juan'),
(19, 'San Luis'),
(20, 'Santa Cruz'),
(21, 'Santa Fe'),
(22, 'Santiago del Estero'),
(23, 'Tierra del Fuego'),
(24, 'Tucumán');
