import React from "react";
import "./App.css";

function App() {
  return (
    <div className="cv">

      <div className="left">
        <img src="/profile.jpg" alt="Moje zdjęcie" />

        <h1>Daniel Kostyra</h1>
        <p>Technik programista</p>

        <hr />

        <h2>Kontakt</h2>
        <p>📧 daniel@email.com</p>
        <p>📞 777 777 777</p>
        <p>📍 Katowice</p>

        <h2>Zainteresowania</h2>
        <p>💻 Informatyka</p>
        <p>🎮 Gry komputerowe</p>
        <p>⚽ Piłka nożna</p>
      </div>

      <div className="right">

        <h2>O mnie</h2>
        <p>
          Jestem uczniem na kierunku technik programista.
          Interesuję się informatyką i lubię poznawać nowe technologie.
        </p>

        <h2>Wykształcenie</h2>
        <p>
          <b>Technik programista</b>
          <br />
          Informatyka
        </p>

        <h2>Umiejętności</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Podstawy React</li>
        </ul>

        <h2>Języki</h2>
        <p>Polski – ojczysty</p>
        <p>Angielski – podstawowy</p>

      </div>

    </div>
  );
}

export default App;