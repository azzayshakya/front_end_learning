import axios from "axios";
import { CaseLowerIcon } from "lucide-react";
import { useEffect, useState } from "react";

const MapFunction = () => {
  const [project, setProject] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/project/get-project/67ec51a5d34dcf351374ab49",
      );
      setProject(response.data.project);
      setMessage(response.data.message);
      // console.log("Fetched Data:", response.data);
    } catch (error) {
      console.log("Error while fetching the data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
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
    <div>
      <p>{message}</p>

      {project && (
        <>
          <div className="mx-auto mt-5 max-w-full rounded-lg bg-muted-foreground p-3">
            <p>
              <span>Project Name :</span> {project.name}
            </p>
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <p className="text-xl">
                <span className="text-2xl font-bold text-black">
                  Created On :
                </span>{" "}
                {new Date(project.createdAt).toLocaleString()}
              </p>
              <p className="text-xl">
                <span className="text-2xl font-bold text-black">
                  Updated On :
                </span>{" "}
                {new Date(project.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>

          <div>
            <ul>
              {/* user  is a parameter that is passed to map  that will refer each item in the project array */}
              {project.users.map((user) => (
                <li key={user._id}>{user.email}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MapFunction;


// json 

// -- JSON stands for: JavaScript Object Notation

// It's a way to represent data as a string so it can be easily sent over the internet


// Example : 

// const obj = { name: "Ajay", age: 23 };
// // JSON version (string format):
// '{ "name": "Ajay", "age": 23 }'


// What does JSON.stringify() do?

// const obj = { name: "Ajay", age: 23 };

// const jsonString = JSON.stringify(obj);
// console.log(jsonString); // => '{"name":"Ajay","age":23}'

// where and why use json.stringfy()
// Use CaseLowerIcon
// Sending data in POST requests	
// Saving to localStorage	

// Why use JSON.stringify()

// Most APIs accept JSON strings
// localStorage only stores strings

// 🛠️ What is Axios?
// Axios is a popular JavaScript library used to make HTTP requests (like GET, POST, PUT, DELETE) from the browser or Node.js.