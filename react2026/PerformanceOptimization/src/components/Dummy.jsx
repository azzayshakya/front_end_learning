import React, { useState } from "react";
import "./dummy.css";
const Model = () => (
  <>
    <div
      className="model"
      style={{
        border: "2px red solid",
        background: "red",
        color: "white",
        height: "15rem",
        width: "15rem",
        textAlign: "center",
      }}
    >
      model
    </div>
  </>
);
export default function Dummy() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div
        style={{
          // border: "2px black solid",
          borderRadius: "12px",
          background: `linear-gradient(90deg, #963535, #727ead, #0a1129)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div className="modernText">
          This is a good model you can click on the button to open this model
        </div>
        <div
          style={{
            background: "#4848ff",
            borderRadius: "0.5rem",
            width: "5rem",
            padding: "10px 15px",
            color: "white",
            textAlign: "center",
            cursor: "pointer ",
          }}
          onClick={() => setOpen(!open)}
        >
          Click
        </div>
      </div>

      <div>{open && <Model />}</div>
    </div>
  );
}
