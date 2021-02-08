CREATE TABLE lessons (
  module_id SMALLINT NOT NULL REFERENCES modules (id) ON DELETE CASCADE,
  id SMALLINT NOT NULL,
  name TEXT NOT NULL,
  PRIMARY KEY (module_id, id)
);
