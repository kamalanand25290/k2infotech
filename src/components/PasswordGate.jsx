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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h3>Enter Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
