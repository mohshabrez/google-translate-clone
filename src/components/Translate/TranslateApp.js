import React, { useEffect, useState } from "react";
import axios from "axios";
import TranslateButton from "../TranslateButton/TranslateButton";
import "./TranslateApp.css"
import TabComponent from "../Tabs/Tabs";
import close from "../../assets/close.png"
import microphone from "../../assets/microphone.png"
import LanguageDropdown from "../LanguageDropDown/LanguageDropdown";
import exchange from "../../assets/exchange.png"


function TranslateApp() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("Translation");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("en"); // Default target language is English
  const [activatedTab, setActivatedTab] = useState(null)


  const DEBOUNCE_DELAY = 800; // Adjust as needed
  let debounceTimer;

  const encodedParamss = new URLSearchParams();
    encodedParamss.set('q', sourceText);

    
const optionss = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '7ee5fd0af3mshae771e98355a7cbp12bc67jsn8c3a350e1fdf',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParamss,
  };

  useEffect(() => {
    // Debounced API call when searchInput changes
    clearTimeout(debounceTimer);
    if (sourceText) {
      debounceTimer = setTimeout(async () => {
        try {
            const response = await axios.request(optionss);
            setActivatedTab(response.data.data.detections[0][0].language);
        } catch (error) {
            console.error(error);
        }
      }, DEBOUNCE_DELAY);
    }
  }, [sourceText]);




  const encodedParams = new URLSearchParams();
  encodedParams.set("q", sourceText);
  encodedParams.set("target", targetLanguage);
  encodedParams.set("source", sourceLanguage);

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "7ee5fd0af3mshae771e98355a7cbp12bc67jsn8c3a350e1fdf",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com"
    },
    data: encodedParams
  };

  const translateText = async () => {
    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setSourceText("")
    setTranslatedText("Translation")
  }

  return (
    <div className="container mt-4 translate">
      <div className="row">
        <div className="col-md-6">
            <div className="navsets">
            <TabComponent detectedlanguage={activatedTab}
            />
            <div className="chnagedrop">
                <LanguageDropdown 
            value={sourceLanguage}
            onChange={(value) => setSourceLanguage(value)}
          />
            <img className="exchnageimg" src={exchange} alt="exchange"/>
                </div>
            </div>
          <textarea
            className="form-control"
            rows="5"
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
          >
          </textarea>
          <img src={close} alt="close" className="closimg" onClick={handleClose}/>
          <img src={microphone} alt="close" className="microimg"/>
        </div>
        <div className="col-md-6">
        <div className="navsets">
                <TabComponent/>
                <div className="chnagedrop">
                <LanguageDropdown 
            value={targetLanguage}
            onChange={(value) => setTargetLanguage(value)}
          />
                </div>
                
            </div>
          <textarea
            className="form-control textareab"
            rows="5"
            value={translatedText}
            readOnly
          ></textarea>
          
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <TranslateButton onClick={translateText} />
        </div>
      </div>
    </div>
  );
}

export default TranslateApp;
