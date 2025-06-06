CREATE TABLE employee (
  emp_id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  dept_id INT(10) UNSIGNED NOT NULL,
  FOREIGN KEY (dept_id) REFERENCES Department(dept_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE Department (
  dept_id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE EmployeeSkill (
  emp_id INT(10) UNSIGNED NOT NULL,
  skill_id INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (emp_id, skill_id),
  CONSTRAINT fk_employee FOREIGN KEY (emp_id) REFERENCES employee(emp_id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_skill FOREIGN KEY (skill_id) REFERENCES Skill(skill_id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE Skill (
  skill_id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  skill_description VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;