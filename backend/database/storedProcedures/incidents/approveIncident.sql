USE citizenConnect;

CREATE OR ALTER PROCEDURE approveIncident(
    @id VARCHAR(255)
)   
AS
BEGIN
UPDATE incidents SET isApproved=0 
WHERE id=@id
END 


GO;


-- will now make the incident NOT approved
-- preventing users from seeing it