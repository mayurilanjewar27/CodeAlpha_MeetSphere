import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json"
    }
});

// Automatically attach JWT Token

API.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if(token){

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

// Authentication

export const registerUser = (userData) =>
    API.post("/auth/register", userData);

export const loginUser = (userData) =>
    API.post("/auth/login", userData);

// Meeting

export const createMeeting = (meetingData) =>
    API.post("/meetings/create", meetingData);

export const getMeetings = () =>
    API.get("/meetings");

// File Upload

export const uploadFile = (formData) =>
    API.post("/files/upload", formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    });

export default API;