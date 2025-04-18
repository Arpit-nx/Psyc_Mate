import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // Flask backend URL
});

export const login = (email: string, password: string) =>
  API.post("/login", { email, password });

export const getTherapists = () =>
  API.get("/therapists");