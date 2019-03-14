LOAD DATA INFILE '/var/lib/mysql-files/administration_routes.csv'
INTO TABLE AdministrationRoutes
FIELDS TERMINATED BY ','
	ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 lines
(`concept_code`, `concept_name`, `display_name_en`, `display_name_fr`, `definition`, `abbreviation`)
set createdAt=NOW(), updatedAt=NOW();
