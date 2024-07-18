USE citizenConnect;

CREATE OR ALTER PROCEDURE getPolls

AS
BEGIN 
SELECT * FROM polls WHERE isDeleted=0 AND isApproved=1 AND isOpen=1
END;

GO;