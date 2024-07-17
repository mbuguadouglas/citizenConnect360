USE citizenConnect;

CREATE OR ALTER PROCEDURE addPoll(
    @id VARCHAR(255),
    @query VARCHAR(255),
    @response VARCHAR(255),

    @userId VARCHAR(255),
    @viewId VARCHAR(255),
    @pollId VARCHAR(255)
    )
AS
BEGIN 
INSERT INTO openAi(id,query,response,userId,viewId,pollId)
VALUES (@id,@query,@response,@userId,@viewId,@pollId)
END

GO;


