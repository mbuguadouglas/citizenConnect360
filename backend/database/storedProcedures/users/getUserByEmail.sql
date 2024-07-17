USE citizenConnect;

CREATE OR ALTER PROCEDURE getUserByEmail(
    @email VARCHAR(255)
)
AS
BEGIN 
SELECT * FROM users WHERE email=@email AND isDeleted=0
END;

GO;

-- for password reset hence you need to filter out deleted users