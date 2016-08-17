  use doctors_orders;

  CREATE TABLE IF NOT EXISTS patients (
    patient_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    surname VARCHAR(40),
    id_no INT(13),
    mobile_no INT(11),
    email VARCHAR(100),
    physical_address VARCHAR(200),
    doc_id INT
  );

  CREATE TABLE IF NOT EXISTS scripts (
    script_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    script_datetimestamp DATE,
    script_otp INT(5),
    patient_id INT,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
  );

  CREATE TABLE IF NOT EXISTS script_items (
    script_items_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    med_id INT,
    Med_name VARCHAR(50),
    quantity INT,
    script_otp INT(5),
    script_id INT,
    FOREIGN KEY (script_id) REFERENCES scripts(script_id)
  );

  -- CREATE TABLE IF NOT EXISTS script (
  --   script_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  --
  -- )

  -- ALTER TABLE purchases
  --     ADD CONSTRAINT fk_purchases_product_id FOREIGN KEY (prod_id) REFERENCES products(prod_id);
