import React, { useState } from 'react';

const camerasList = ['Patio', 'Garaje', 'Entrada'];

export default function CameraViewer() {
  const [activeCamera, setActiveCamera] = useState(camerasList[0]);

  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
          {camerasList.map((camera) => (
            <li
              key={camera}
              className={`camera-item ${activeCamera === camera ? 'active' : ''}`}
              onClick={() => setActiveCamera(camera)}
              style={{ cursor: 'pointer' }}
            >
              {camera}
            </li>
          ))}
        </ul>
      </aside>

      <main className="main-content">
        <h2>Cámara: {activeCamera}</h2>
        <div className="video-placeholder">VIDEO: {activeCamera}</div>
      </main>
    </div>
  );
}
