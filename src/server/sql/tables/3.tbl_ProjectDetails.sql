CREATE TABLE tbl_ProjectDetails
(
	Id INT IDENTITY PRIMARY KEY NOT NULL,
	ProjectId INT NOT NULL FOREIGN KEY REFERENCES tbl_Projects(Id),
	Header NVARCHAR(100) NOT NULL,
	Info NVARCHAR(200),
	Description NVARCHAR(MAX)
)