class Reponder {
  static sendError(res, { error, errorCode = 0, httpStatusCode = 500 }) {
    let errorDescription = "An unexpected error was encountered.";

    if (error instanceof Error) {
      errorDescription = error.message;
    }

    if (typeof error === "string") {
      errorDescription = error;
    }

    res.status(httpStatusCode).json({
      errorCode,
      errorDescription,
    });
  }

  static sendSuccess(res, { payload = null, httpStatusCode = 200 }) {
    res.status(httpStatusCode).json(payload);
  }
}

module.exports = Reponder;
