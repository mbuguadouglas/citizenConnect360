USE citizenConnect;

CREATE OR ALTER PROCEDURE getView(
    @id VARCHAR(255)
)

AS
BEGIN 
SELECT * FROM views WHERE id=@id AND isApproved=1
END;

GO;