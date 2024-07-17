USE citizenConnect;

CREATE OR ALTER PROCEDURE updatePassword(
    @id VARCHAR(255),
    @choiceMade VARCHAR(255),
)
AS
BEGIN
UPDATE pollVotes SET choiceMade=@choiceMade
WHERE id=@id
END;

GO;