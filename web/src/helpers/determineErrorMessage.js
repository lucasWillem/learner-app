export function getErrorMessage({ error }) {
  try {
    if (error.response) {
      const { data } = error.response;
      throw new Error(`${data.errorDescription} Please try again.`);
    }
    if (error.request) {
      throw new Error(
        "An unexpected error was encountered. Please ensure that you have a stable internet connection."
      );
    }

    throw new Error("An unexpected error was encountered.");
  } catch (error) {
    return error.message;
  }
}
