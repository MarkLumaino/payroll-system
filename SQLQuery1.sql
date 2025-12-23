CREATE TABLE EmployeeList (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    IDNumber INT NOT NULL,
    Name VARCHAR(100) NOT NULL,
    Position VARCHAR(50) NOT NULL,
    Branch VARCHAR(50) NOT NULL,
    Department VARCHAR(50) NOT NULL,
    Division VARCHAR(50)
);

CREATE TABLE EmployeeDetails (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    IDNumber INT NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    MiddleName VARCHAR(50),
    ExtensionName VARCHAR(50),
    FullName VARCHAR(100) NOT NULL,
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
    Status VARCHAR(20) NOT NULL
);

CREATE TABLE UserList (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    FullName VARCHAR(100) NOT NULL
);

CREATE TABLE PayrollInformation (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
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
    IsMinimumWage TINYINT DEFAULT 0
);

CREATE TABLE FamilyAndContacts (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    MiddleName VARCHAR(50),
    LastName VARCHAR(50) NOT NULL,
    ContactNumber VARCHAR(20),
    Address VARCHAR(100),
    Relation VARCHAR(50),
    ContactForEmergency TINYINT DEFAULT 0
);

CREATE TABLE EducationAndWork (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    InstituteOrCompanyAddress VARCHAR(100),
    CourseOrPosition VARCHAR(100),
    ContactNumber VARCHAR(20),
    DateFromTo DATE,
    Remarks VARCHAR(100),
    FilePath VARCHAR(255)
);

CREATE TABLE Memo (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Date DATE NOT NULL,
    Subject VARCHAR(100) NOT NULL,
    FilePath VARCHAR(255)
);

CREATE TABLE ShiftCode (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ShiftDate DATE NOT NULL
);

CREATE TABLE UserDetail (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    FullName VARCHAR(100) NOT NULL
);

CREATE TABLE UserLogin (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(255) NOT NULL
);
