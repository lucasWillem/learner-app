CREATE TABLE learner_progress (
  id SMALLINT PRIMARY KEY,
  learner_id UUID NOT NULL REFERENCES learners(id) ON DELETE CASCADE,
  module_id SMALLINT NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  lesson_id SMALLINT NOT NULL,
  progress INTEGER DEFAULT 0, 
  start_date TIMESTAMPTZ,
  completion_date TIMESTAMPTZ
);
