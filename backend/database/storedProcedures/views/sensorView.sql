USE citizenConnect;

CREATE OR ALTER PROCEDURE sensorView(
    @id VARCHAR(255)
)   
AS
BEGIN
UPDATE views SET isApproved=0 
WHERE id=@id
END 


GO;



-- will now make the view NOT approved
-- preventing users from seeing it
