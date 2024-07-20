USE citizenConnect;

CREATE OR ALTER PROCEDURE getNewUser

AS
BEGIN 
SELECT * FROM users WHERE isEmailSent=0
END;

GO;

