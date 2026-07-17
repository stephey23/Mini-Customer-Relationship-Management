-- Mini CRM Database Schema

CREATE DATABASE IF NOT EXISTS mini_crm;
USE mini_crm;

CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(30),
    source VARCHAR(100),
    status ENUM('New', 'Contacted', 'Qualified', 'Converted', 'Lost') DEFAULT 'New',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- A few sample leads so the frontend has something to show immediately
INSERT INTO leads (name, email, phone, source, status, notes) VALUES
('Rohan Patil', 'rohan.patil@example.com', '9876543210', 'Website', 'New', 'Interested in enterprise plan'),
('Sneha Kulkarni', 'sneha.k@example.com', '9123456780', 'Referral', 'Contacted', 'Follow up next week'),
('Amit Deshmukh', 'amit.d@example.com', '9988776655', 'LinkedIn', 'Qualified', 'Budget confirmed, sending proposal');

-- View showing lead counts per status (uses GROUP BY, similar to concepts you already practiced)
CREATE OR REPLACE VIEW leads_by_status AS
SELECT status, COUNT(*) AS total
FROM leads
GROUP BY status;
