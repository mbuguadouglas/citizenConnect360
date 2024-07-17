USE citizenConnect;

CREATE OR ALTER PROCEDURE getVotes(
    @id VARCHAR(255)
)

AS
BEGIN 
SELECT * FROM pollVotes WHERE isDeleted=0
END;

GO;