import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout title="Crypto Price Tracker" description="Docusaurus Documentation for Crypto Dashboard">
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Welcome to Crypto Price Tracker Docs</h1>
        <p>Learn how to set up, use, and integrate the Crypto Price Tracker.</p>
        <a href="/docs/project-setup" style={{ textDecoration: "none" }}>
          <button
            style={{
              background: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </a>
      </main>
    </Layout>
  );
}