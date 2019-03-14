LOAD DATA INFILE '/var/lib/mysql-files/tradename_vaccines.csv'
INTO TABLE TradenameVaccines
FIELDS TERMINATED BY ','
	ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 lines
(`concept_code`, `concept_name`, `display_name_en`, `display_name_fr`, `concept_effective_date`, `concept_status`, `abbreviation_en`, `abbreviation_fr`, `picklist_en`, `picklist_fr`, `display_terms_en`, `display_terms_fr`, `prevalence`, `provider_list_prevalence`, `generic_parent_concept_code`, `ontario_ispa_vaccine`, `ontario_clinician_friendly_tradename_en`, `tradename_preferred_term_en`, `tradename_icon_public_en`, `typical_dose_amount`, `dose_unit_of_measurement`, `strength`, `route`, `ontario_manufacturer_abbreviation`)
set createdAt=NOW(), updatedAt=NOW();
