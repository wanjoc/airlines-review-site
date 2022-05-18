CREATE TABLE IF NOT EXISTS airlines(
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  logo_url TEXT,
  headquarters TEXT NOT NULL,
  contact_number VARCHAR(255) NOT NULL,
  homepage_url TEXT NOT NULL
);