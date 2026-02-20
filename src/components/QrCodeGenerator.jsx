import React, { useState } from "react";

const QrCodeGenerator = ({ text }) => {
  return (
    text && (
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`}
        alt={`QrCode para ${text}`}
      />
    )
  );
};

export default QrCodeGenerator;
