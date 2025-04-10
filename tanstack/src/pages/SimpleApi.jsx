import axios from "axios";
import { useEffect, useState } from "react";

const SimpleApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/project/get-project/67ec51a5d34dcf351374ab49",
      );
      setData(response.data);
      console.log("Fetched Data:", response.data);
    } catch (error) {
      console.log("Error while fetching the data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: "me@gmail.com",
        password: "123",
      });
      console.log("Login successful:", response.data);
      setMessage("Login successful!");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setMessage(error.response?.data?.message || "Login failed.");
      console.log(message)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    handleLogin();
  }, []);

  if (loading) {
    return <div className="text-white">Data is Fetching...</div>;
  }

  if (error) {
    return (
      <div className="text-white">
        <h3>Got Error while Fetching</h3>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h1>Fetching Data</h1>
      {loading && <>loading the data</>}
      {!loading && !error && (
        <pre className="rounded bg-gray-800 p-4">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <h1>Login the user</h1>
    </div>
  );
};

export default SimpleApi;
