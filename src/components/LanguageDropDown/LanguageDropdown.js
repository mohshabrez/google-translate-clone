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
  const[checklanguages, setCheckLanguages] = useState(null)

  const optionsss = {
    method: 'GET',
    url: 'https://text-translator2.p.rapidapi.com/getLanguages',
    headers: {
      'X-RapidAPI-Key': '7ee5fd0af3mshae771e98355a7cbp12bc67jsn8c3a350e1fdf',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    }
  };
  const getLanguages = async () => {
      try {
          const response = await axios.request(optionsss);
          setCheckLanguages(response.data.data.languages);
      } catch (error) {
          console.error(error);
      }
  }
  
   useEffect(() => {
      getLanguages()
   },[])
  




  const options = {
    method: "GET",
    url:
      "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    headers: {
      "X-RapidAPI-Key": "7ee5fd0af3mshae771e98355a7cbp12bc67jsn8c3a350e1fdf",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com"
    }
  };

  const getLanguage = async () => {
    try {
      const response = await axios.request(options);

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
            checklanguages.map((language) => option === language.code) ? (
                <option key={option.language} value={option.language}>
            {option.language}
          </option>
            ) : ("")
          
        ))}
      </Form.Control>
    </Form.Group>
  );
}

export default LanguageDropdown;
