const validator = require("validator");

const db = require("../db");
const Responder = require("../helpers/responder");

exports.listLearners = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT * FROM learners`);
    const learners = rows.map((row) => ({
      id: row.id,
      name: row.name,
      username: row.username,
      lastSync: row.last_sync,
    }));

    Responder.sendSuccess(res, { payload: learners });
  } catch (error) {
    Responder.sendError(res, {
      error: new Error("Learners could not be retrieved."),
    });
  }
};

exports.deleteLearner = async ({ params: { learnerId } }, res) => {
  try {
    await db.query(`DELETE FROM learners WHERE id = '${learnerId}';`);
    Responder.sendSuccess(res, { httpStatusCode: 204 });
  } catch (error) {
    Responder.sendError(res, {
      error: new Error("Learner could not be deleted."),
    });
  }
};

exports.getLearnerProgress = async ({ params: { learnerId } }, res) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM learner_progress WHERE learner_id='${learnerId}'`
    );
    const progressEntries = rows.map((row) => ({
      learnerId: row.learner_id,
      moduleId: row.module_id,
      lessonId: row.lesson_id,
      progress: row.progress,
      startDate: row.start_date,
      completionDate: row.completion_date,
    }));

    Responder.sendSuccess(res, { payload: progressEntries });
  } catch (error) {
    Responder.sendError(res, {
      error: new Error("Current progress could not be retrieved."),
    });
  }
};

