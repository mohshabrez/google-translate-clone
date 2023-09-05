import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

const languages = [
  { language: "en" },
  { language: "es" },
  { language: "fr" }
  // Add more languages as needed
];

function LanguageDropdown({ label, value, onChange }) {
  const [languageOptions, setLanguageOptions] = useState(languages);
  const options = {
    method: "GET",
    url:
      "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "8ffadf0403msh880041fc073be4dp199e81jsn50afc3694c80",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com"
    }
  };

  const getLanguage = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setLanguageOptions(response.data.data.languages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.language} value={option.language}>
            {option.language}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

export default LanguageDropdown;
