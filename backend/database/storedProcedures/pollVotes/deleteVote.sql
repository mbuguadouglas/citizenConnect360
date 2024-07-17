USE citizenConnect;

CREATE OR ALTER PROCEDURE deleteVote(
    @id VARCHAR(255)
)   
AS
BEGIN
UPDATE pollVotes SET isDeleted=1 
WHERE id=@id
END 

GO;