import { useState } from "react";
import "./App.css";
import ImageComponent from "./components/ImageComponent";
import { useImage } from "./hooks/useImage";

function App() {
  const { image, changeImage, isLoaded } = useImage();
  return (
    <>
      <div className="main-container">
        <h1>Gerador de QR Code</h1>
        <p>Insira uma URL ou texto, para criar um QR Code.</p>
        <form
          onSubmit={(e) => {
            changeImage(e, Math.random());
          }}
        >
          <label htmlFor="content">
            <input type="text" placeholder="Digite a URL ou texto..." />
          </label>
          <button type="submit">Gerar QR Code</button>
        </form>
        <ImageComponent content={image} isLoaded={isLoaded} />
      </div>
    </>
  );
}

export default App;
