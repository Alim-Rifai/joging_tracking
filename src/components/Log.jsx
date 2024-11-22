import React from "react";
import styles from "../styles/Log.module.css";

function Log({ entries }) {
  return (
    <div className={styles.log}>
      <h3>Riwayat Lari</h3>
      {entries.length > 0 ? (
        entries.map((entry, index) => (
          <div key={index} className={styles.logEntry}>
            <p><strong>Total KM:</strong> {entry.distance} km</p>
            <p><strong>Durasi:</strong> {entry.time}</p>
            <p><strong>Kecepatan:</strong> {entry.speed} km/h</p>
            <p><strong>Kalori:</strong> {entry.calories} kcal</p>
          </div>
        ))
      ) : (
        <p>Belum ada riwayat lari.</p>
      )}
    </div>
  );
}

export default Log;
