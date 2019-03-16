LOAD DATA INFILE '/var/lib/mysql-files/diseases.csv'
INTO TABLE Diseases
CHARACTER SET UTF8
FIELDS TERMINATED BY ','
	ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 lines
(`concept_code`, `concept_name`, `display_name_en`, `display_name_fr`, `concept_effective_date`, `concept_status`)
set createdAt=NOW(), updatedAt=NOW();
