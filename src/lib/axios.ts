"use server";

import { get } from "@/server/actions/auth";
import axios from "axios";

const BASE_URL = "https://st1728476136997.my.salesforce.com/services/";

export const api = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
  headers: {
    "Content-Type": "application/json", // Optional: Set content typ
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = (await get("token"))?.value; // Get the token from localStorage, for example

    if (!token) {
      return Promise.reject("No token found");
    }
    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
