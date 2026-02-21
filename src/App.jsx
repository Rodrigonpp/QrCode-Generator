import { useState } from "react";
import "./App.css";
import ImageComponent from "./components/ImageComponent";
import { useImage } from "./hooks/useImage";

function App() {
  const { image, changeImage, prevContent, isLoaded } = useImage();
  const [initialize, setInitialize] = useState(false);
  const [qrInputValue, setQrInputValue] = useState("");
  return (
    <>
      <div
        className="main-container"
        style={{ height: !initialize ? "232px" : "477px" }}
      >
        <h1>Gerador de QR Code</h1>
        <p>Insira uma URL ou texto, para criar um QR Code.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (qrInputValue) {
              setInitialize(true);
              if (!(prevContent === qrInputValue)) changeImage(qrInputValue);
            }
          }}
        >
          <label htmlFor="content">
            <input
              type="text"
              placeholder="Digite a URL ou texto..."
              value={qrInputValue || ""}
              onChange={(e) => setQrInputValue(e.target.value)}
            />
          </label>
          <button type="submit">Gerar QR Code</button>
        </form>
        {initialize && <ImageComponent content={image} isLoaded={isLoaded} />}
      </div>
    </>
  );
}

export default App;
