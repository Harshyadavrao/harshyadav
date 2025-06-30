import { useState } from "react";

export default function ProductionTracker() {
  const [production, setProduction] = useState("");
  const [data, setData] = useState([
    { time: "10 AM", value: 50 },
    { time: "11 AM", value: 40 },
    { time: "12 PM", value: 45 },
  ]);

  const logProduction = () => {
    if (production.trim() === "" || isNaN(production)) return;
    const newEntry = { time: new Date().toLocaleTimeString(), value: Number(production) };
    setData([...data, newEntry]);
    setProduction("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Production Tracker</h1>

      {/* Production Input */}
      <div style={styles.inputSection}>
        <input
          type="number"
          value={production}
          onChange={(e) => setProduction(e.target.value)}
          placeholder="Enter production count"
          style={styles.input}
        />
        <button onClick={logProduction} style={styles.button}>
          Log Production
        </button>
      </div>

      {/* Production Data Display */}
      <div style={styles.dataSection}>
        <h2 style={styles.subHeading}>Production Data</h2>
        <ul style={styles.list}>
          {data.map((entry, index) => (
            <li key={index} style={styles.listItem}>
              <strong>{entry.time}</strong>: {entry.value} units
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    width: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  inputSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: "1",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  dataSection: {
    background: "#f9f9f9",
    padding: "10px",
    borderRadius: "6px",
  },
  subHeading: {
    marginBottom: "10px",
    color: "#555",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    padding: "5px 0",
    borderBottom: "1px solid #ddd",
  },
};

