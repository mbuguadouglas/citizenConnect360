USE citizenConnect;

CREATE OR ALTER PROCEDURE getUserById(
    @id VARCHAR(255)
)
AS
BEGIN 
SELECT * FROM users WHERE id=@id
END;

GO;

-- for admin use hence no need to filter out deleted users