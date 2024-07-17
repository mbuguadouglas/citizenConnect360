USE citizenConnect;

CREATE OR ALTER PROCEDURE getVote(
    @id VARCHAR(255)
)

AS
BEGIN 
SELECT * FROM pollVotes WHERE id=@id AND isDeleted=0
END;

GO;