LOAD DATA INFILE '/var/lib/mysql-files/products.csv'
INTO TABLE Products
FIELDS TERMINATED BY ','
	ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 lines
(`concept_code`, `din`, `brand_name`, `company_name`, `atc_number`, @CONCEPT_STATUS, @HISTORY_DATE_STR, @MARKET_DATE_STR)
set `concept_status` = IF(@CONCEPT_STATUS = '', NULL, @CONCEPT_STATUS), `history_date` = IF(@HISTORY_DATE_STR = '', NULL, STR_TO_DATE(@HISTORY_DATE_STR, '%Y-%m-%d')), `original_market_date` = IF(@MARKET_DATE_STR = '', NULL, STR_TO_DATE(@MARKET_DATE_STR, '%Y-%m-%d')), createdAt=NOW(), updatedAt=NOW();
