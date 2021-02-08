import axios from "axios";

class Ajax {
  instance;

  static getInstance() {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL,
      });
    }

    return this.instance;
  }
}

export { Ajax };
