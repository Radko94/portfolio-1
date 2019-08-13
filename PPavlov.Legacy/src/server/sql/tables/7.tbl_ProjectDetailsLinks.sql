CREATE TABLE tbl_ProjectDetailsLinks
(
	Id INT IDENTITY PRIMARY KEY NOT NULL,
	ProjectDetailId INT NOT NULL FOREIGN KEY REFERENCES tbl_ProjectDetails(Id),
	ProjectLinkId INT NOT NULL FOREIGN KEY REFERENCES tbl_ProjectsLinks(Id)
)