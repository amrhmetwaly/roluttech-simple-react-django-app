import React from "react";

export function DisplayLink() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Visit My Profile</h1>
      <a
        href="https://bit.ly/amrmetwaly"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
      >
        https://bit.ly/amrmetwaly
      </a>
    </div>
  );
}
