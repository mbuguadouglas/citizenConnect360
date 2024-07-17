USE citizenConnect;

CREATE OR ALTER PROCEDURE addPoll(
    @id VARCHAR(255),
    @choiceMade VARCHAR(255),

    @userId VARCHAR(255),
    @pollId VARCHAR(100)
    )
AS
BEGIN 
INSERT INTO pollVotes(id,choiceMade,pollId,userId)
VALUES (@id,@choiceMade,@pollId,@userId)
END

GO;

