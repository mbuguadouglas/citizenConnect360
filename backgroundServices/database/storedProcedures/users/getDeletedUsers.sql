USE citizenConnect;

CREATE OR ALTER PROCEDURE getDeletedUsers
  
AS
BEGIN 
SELECT * FROM users WHERE isDeleted=1
END;

GO;

