import React from "react";
import Button from "react-bootstrap/Button";
import "./TranslateButton.css"

function TranslateButton({ onClick }) {
  return (
    <Button variant="primary" onClick={onClick} className="translatebutton">
      Translate
    </Button>
  );
}

export default TranslateButton;
