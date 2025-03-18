"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [contract, setContract] = useState("Loading contract...");

  const fetchContract = async () => {
    try {
      const res = await fetch("http://localhost:8000/generate_contract");
      const data = await res.json();
      setContract(data.contract);
    } catch (err) {
      setContract("Error fetching contract. Is the backend running?");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContract();
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-2xl font-bold mb-4">Hackuity Test ⚡️</h1>
      <pre className="bg-gray-900 p-4 rounded-xl overflow-auto whitespace-pre-wrap">
        {contract}
      </pre>
    </main>
  );
}
