"use client";

import { useEffect, useState } from "react";

export default function PasswordGate({ children }) {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem("site_auth");
    if (storedAuth === "true") {
      setAuthorized(true);
    }
    setCheckedStorage(true);
  }, []);

  const handleSubmit = () => {
    if (password === "personalBillingTool2026") {
      setAuthorized(true);
      sessionStorage.setItem("site_auth", "true");
    } else {
      alert("Incorrect password");
    }
  };

  // Wait until sessionStorage is checked
  if (!checkedStorage) return null;

  if (authorized) {
    return children;
  }

  return (
    <>
    <style>{`
        body, input {
      font-family: system-ui, Arial, Helvetica, sans-serif;
      background: #f5f5f5;
      margin: 0;
      padding: 0;
    }
      `}</style>
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
    border: "2px solid #6a35c9",
    padding: "50px 30px",
    borderRadius: "10px",
    background: "#f2effb"}}>
        <h2 style={{margin:"0 0 10px 0", color:"#6a35c9", fontWeight: "normal" }}>Enter Password</h2>
        <input
        style={{padding:"10px 15px"}}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{padding:"10px 15px"}} onClick={handleSubmit}>Login</button>
      </div>
    </div>
    </>
  );
}
