CREATE TABLE tbl_Users
(
	Id INT IDENTITY PRIMARY KEY NOT NULL,
	Username NVARCHAR(100) NOT NULL,
	Password NVARCHAR(300) NOT NULL,
	Email NVARCHAR(100) NOT NULL,
	CreatedAt DATETIME DEFAULT GETDATE()
)