USE citizenConnect;

CREATE OR ALTER PROCEDURE addPoll(
    @id VARCHAR(255),
    @userId VARCHAR(255),
    @title VARCHAR(50),
    @description VARCHAR(100),
    @choices NVARCHAR(MAX)
)
AS
BEGIN 
INSERT INTO polls(id,userId,title,description,choices)
VALUES (@id,@userId,@title,@description,@choices)
END

GO;

