USE citizenConnect;

CREATE OR ALTER PROCEDURE updateView(
    @id VARCHAR(255),
    @userId VARCHAR(255),
    @title VARCHAR(50),
    @description VARCHAR(100),
    @body VARCHAR(255),
    @location VARCHAR(50)
)
AS
BEGIN
UPDATE views SET id=@id, userId=@userId, title=@title, description=@description, body=@body, location=@location
WHERE id=@id
END;

GO;

