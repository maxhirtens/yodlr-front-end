import axios from "axios";

// const BASE_URL =
//   "https://maxhirtens-react-jobly.onrender.com" || "http://localhost:3001";

const BASE_URL = "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class YodlrApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, method = "get", data) {
    const url = `${BASE_URL}/${endpoint}`;

    try {
      return await axios({ url, method, data });
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // Get all users.
  static async getUsers() {
    let res = await this.request("users");
    return res.data;
  }

  // sign up.
  static async signup(data) {
    let res = await this.request(`users`, "post", data);
    console.log(res.data);
    return res.data;
  }

  // update user profile.
  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, "patch", data);
    return res.user;
  }
}
export default YodlrApi;
