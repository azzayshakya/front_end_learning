import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

// const getAuthToken = () => localStorage.getItem("wechatUserToken");

// const authHeaders = () => ({
//   headers: { Authorization: `Bearer ${getAuthToken()}` },
// });

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTliMzFiOWFhMTdjMTY4NzE4YjVmZSIsImVtYWlsIjoibWVAZ21haWwuY29tIiwiaWF0IjoxNzQ0NDA4NDQ5LCJleHAiOjE3NDQ0OTQ4NDl9.v3ZKCttwXuiUh0w5uwLjvPoj7jDw_QgqrlgO-lE5N44";

export const fetchProjectsApi = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/project/user-projects`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data.projects;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
