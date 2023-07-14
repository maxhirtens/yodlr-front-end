import axios from "axios";

// const BASE_URL =
//   "https://maxhirtens-react-jobly.onrender.com" || "http://localhost:3001";

const BASE_URL = "http://localhost:3000";

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

  static async request(endpoint) {
    const url = `${BASE_URL}/${endpoint}`;

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };

    let res = await axios.get(url, config);
    console.log(res);

    // try {
    //   return await axios.get(url);
    // } catch (err) {
    //   console.error("API Error:", err.response);
    //   let message = err.response.data.error.message;
    //   throw Array.isArray(message) ? message : [message];
    // }
  }

  // Individual API routes

  // Get all users.
  static async getUsers() {
    let res = await this.request("users", {});
    return res.users;
  }

  // sign up.
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  // update user profile.
  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}
export default YodlrApi;
