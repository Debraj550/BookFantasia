import axios from "axios";

export class ApiService {
  static saveStripeInfo(data = {}) {
    return axios.post(`http://localhost:8000/payments/save-stripe-info/`, data);
  }
}

export default axios.create({
  baseURL: "http://localhost:8000",
});
