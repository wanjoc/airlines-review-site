CREATE TABLE IF NOT EXISTS reviews(
  id BIGSERIAL PRIMARY KEY,
  reviewer_name VARCHAR(255),
  number_of_stars INTEGER NOT NULL,
  comment TEXT,
  airline_id BIGINT NOT NULL REFERENCES airlines(id)
);