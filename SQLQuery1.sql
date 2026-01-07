USE Payroll_System;
-- =========================
-- EMPLOYEES (MASTER TABLE)
-- =========================
CREATE TABLE Employees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    IDNumber INT NOT NULL UNIQUE,
    FullName VARCHAR(100) NOT NULL,
    Position VARCHAR(50) NOT NULL,
    Branch VARCHAR(50) NOT NULL,
    Department VARCHAR(50) NOT NULL,
    Division VARCHAR(50),
    Status VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO Employees (IDNumber, FullName, Position, Branch, Department, Status)
VALUES 
(1001, 'John Doe', 'Manager', 'Main', 'Sales', 'Active'),
(1002, 'Jane Smith', 'Engineer', 'Main', 'IT', 'Active'),
(1003, 'Alice Johnson', 'Accountant', 'Main', 'Finance', 'Active'),
(1004, 'Bob Brown', 'HR Officer', 'Main', 'HR', 'Active'),
(1005, 'Charlie Davis', 'Support Staff', 'Main', 'Operations', 'Active');



-- =========================
-- EMPLOYEE DETAILS
-- =========================
CREATE TABLE EmployeeDetails (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    MiddleName VARCHAR(50),
    ExtensionName VARCHAR(50),
    BiometricIDNumber INT,
    DateHired DATE NOT NULL,
    DateResigned DATE,
    Address VARCHAR(100),
    ZipCode VARCHAR(10),
    PhoneNumber VARCHAR(20),
    CellPhoneNumber VARCHAR(20),
    EmailAddress VARCHAR(100),
    DateOfBirth DATE,
    PlaceOfBirth VARCHAR(100),
    BirthZipCode VARCHAR(10),
    Sex VARCHAR(10),
    CivilStatus VARCHAR(20),
    Citizenship VARCHAR(50),
    Religion VARCHAR(50),
    Height INT,
    Weight INT,
    BloodType VARCHAR(10),
    TshirtType VARCHAR(10),
    ProfileFilePath VARCHAR(255),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(ID)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- =========================
-- PAYROLL INFORMATION
-- =========================
CREATE TABLE PayrollInformation (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT NOT NULL,
    GSISNumber VARCHAR(50),
    SSSNumber VARCHAR(50),
    SSSAddOn DECIMAL(10,2),
    SSSGrossSalary DECIMAL(10,2),
    HDMFNumber VARCHAR(50),
    HDMFType VARCHAR(50),
    HDMFAddOn DECIMAL(10,2),
    PHICNumber VARCHAR(50),
    TIN VARCHAR(50),
    TaxCode VARCHAR(20),
    TaxTable VARCHAR(20),
    DepBranchCode VARCHAR(20),
    ATMAccountNumber VARCHAR(50),
    Company VARCHAR(50),
    Branch VARCHAR(50),
    Department VARCHAR(50),
    Position VARCHAR(50),
    Division VARCHAR(50),
    PayrollGroup VARCHAR(50),
    PayrollType VARCHAR(50),
    GLAccount VARCHAR(50),
    FixDays INT,
    FixHrs INT,
    MonthlyRate DECIMAL(10,2),
    PayrollRate DECIMAL(10,2),
    DailyRate DECIMAL(10,2),
    AbsentDailyRate DECIMAL(10,2),
    HourlyRate DECIMAL(10,2),
    NightHourlyRate DECIMAL(10,2),
    OvertimeHourlyRate DECIMAL(10,2),
    OvertimeNightHourlyRate DECIMAL(10,2),
    TardyHourlyRate DECIMAL(10,2),
    ShiftCode VARCHAR(50),
    IsMinimumWage TINYINT DEFAULT 0,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(ID)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- =========================
-- FAMILY & EMERGENCY CONTACTS
-- =========================
CREATE TABLE FamilyAndContacts (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    MiddleName VARCHAR(50),
    LastName VARCHAR(50) NOT NULL,
    ContactNumber VARCHAR(20),
    Address VARCHAR(100),
    Relation VARCHAR(50),
    ContactForEmergency TINYINT DEFAULT 0,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(ID)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- =========================
-- EDUCATION & WORK HISTORY
-- =========================
CREATE TABLE EducationAndWork (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT NOT NULL,
    InstituteOrCompanyAddress VARCHAR(100),
    CourseOrPosition VARCHAR(100),
    ContactNumber VARCHAR(20),
    DateFrom DATE,
    DateTo DATE,
    Remarks VARCHAR(100),
    FilePath VARCHAR(255),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(ID)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- =========================
-- MEMO
-- =========================
CREATE TABLE Memo (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT NOT NULL,
    MemoDate DATE NOT NULL,
    Subject VARCHAR(100) NOT NULL,
    FilePath VARCHAR(255),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(ID)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- =========================
-- SHIFT CODES
-- =========================
CREATE TABLE ShiftCode (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ShiftDate DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- =========================
-- USERS (LOGIN SYSTEM)
-- =========================
CREATE TABLE Users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    FullName VARCHAR(100) NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SELECT USER(), CURRENT_USER();
SELECT VERSION();

CREATE TABLE Attendance (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT NOT NULL,
    AttendanceDate DATE NOT NULL,
    TimeIn TIME,
    TimeOut TIME,
    Status VARCHAR(20), -- Present, Absent, Late
    FOREIGN KEY (EmployeeID) REFERENCES Employees(ID)
        ON DELETE CASCADE,
    UNIQUE (EmployeeID, AttendanceDate)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Roles (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    RoleName VARCHAR(30) UNIQUE NOT NULL
);

INSERT INTO Roles (RoleName) VALUES
('admin'),
('hr'),
('employee');

ALTER TABLE Users
ADD COLUMN RoleID INT,
ADD FOREIGN KEY (RoleID) REFERENCES Roles(ID);

ALTER TABLE Users
ADD COLUMN EmployeeID INT NOT NULL UNIQUE;

ALTER TABLE Users
ADD CONSTRAINT fk_users_employee
FOREIGN KEY (EmployeeID) REFERENCES Employees(ID)
ON DELETE CASCADE;

ALTER TABLE Users
ADD COLUMN Role ENUM('admin', 'hr', 'employee') NOT NULL DEFAULT 'employee',
ADD COLUMN IsActive TINYINT DEFAULT 1;


