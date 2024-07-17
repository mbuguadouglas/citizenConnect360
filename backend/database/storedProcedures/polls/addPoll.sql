USE citizenConnect;

CREATE OR ALTER PROCEDURE addPoll(
    @id VARCHAR(255),
    @userId VARCHAR(255),
    @title VARCHAR(50),
    @description VARCHAR(100)
)
AS
BEGIN 
INSERT INTO polls(id,userId,title,description)
VALUES (@id,@userId,@title,@description)
END

GO;

