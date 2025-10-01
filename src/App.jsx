import React from "react";
import Cat from "./assets/Cat.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-success text-light fw-bold fs-3 p-3 text-center">
        The Kingdom of Meow
      </header>

      <main className="flex-grow-1 d-flex justify-content-center align-items-center py-5">
        <div
          className="card position-relative shadow-lg rounded-4"
          style={{ maxWidth: "350px" }}
        >
          <div className="card-body text-center">
            <h2 className="card-title fw-bold mb-3">
              Мяу — непокорная бенгалка
            </h2>
            <img src={Cat} className="card-img-top rounded-4 mb-3" alt="Cat" />
            <p className="card-text">
              Я Мяу. Я не спрашиваю, хотите ли вы меня видеть — вы просто
              счастливы быть рядом. Мой взгляд оценивает, лапы решают, а мое
              настроение — закон.
            </p>
          </div>

          <div className="overlay d-flex justify-content-center align-items-center text-light fw-bold">
            Смотри, но не трогай
          </div>
        </div>
      </main>

      <footer className="bg-warning text-dark fs-6 text-center py-3">
        <p className="mb-1">© 2025 Королевство Мяу.</p>
        <p className="mb-0 fst-italic">
          Все права на игривые выходки и внезапные прыжки защищены законом
          кошачьей независимости.
        </p>
      </footer>
    </div>
  );
}