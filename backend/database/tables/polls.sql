USE citizenConnect;

CREATE TABLE polls (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL,
    choices VARCHAR(255) NOT NULL,
    isOpen INT DEFAULT 1,
    createdAt DATETIME DEFAULT GETDATE(),
    isDeleted INT DEFAULT 0,
    isApproved INT DEFAULT 1,

    userId VARCHAR(255) FOREIGN KEY REFERENCES users(id)
)

GO;



