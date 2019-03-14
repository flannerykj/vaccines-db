LOAD DATA INFILE '/var/lib/mysql-files/generic_vaccines.csv'
INTO TABLE GenericVaccines
FIELDS TERMINATED BY ','
	ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 lines
(`concept_code`, `concept_name`, `display_name_en`, `display_name_fr`, `effective_date`, `concept_status`, `abbreviation_en`, `abbreviation_fr`, `picklist_term_en`, `picklist_term_fr`, `display_term_en`, `display_term_fr`, `prevalence`, `ontario_ispa_vaccine`)
set createdAt=NOW(), updatedAt=NOW();
