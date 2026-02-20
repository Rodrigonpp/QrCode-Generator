import { useState } from "react";
import "./App.css";
import QrCodeGenerator from "./components/QrCodeGenerator";

function App() {
  return (
    <>
      <div className="main-container">
        <h1>Gerador de QR Code</h1>
        <p>Insira uma URL ou texto, para criar um QR Code.</p>
        <form>
          <label htmlFor="content">
            <input type="text" placeholder="Digite a URL ou texto..." />
          </label>
          <button type="submit">Gerar QR Code</button>
        </form>
        <QrCodeGenerator text={""}/>
      </div>
    </>
  );
}

export default App;
