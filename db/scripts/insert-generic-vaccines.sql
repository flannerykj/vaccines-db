LOAD DATA INFILE '/var/lib/mysql-files/generic_vaccines.csv'
INTO TABLE GenericVaccines
CHARACTER SET UTF8
FIELDS TERMINATED BY ','
	ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 lines
(`concept_code`, `concept_name`, `display_name_en`, `display_name_fr`, `concept_effective_date`, `concept_status`, `abbreviation_en`, `abbreviation_fr`, `picklist_en`, `picklist_fr`, `display_terms_en`, `display_terms_fr`, `prevalence`, `ontario_ispa_vaccine`)
set createdAt=NOW(), updatedAt=NOW();
