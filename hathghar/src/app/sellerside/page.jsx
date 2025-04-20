"use client";
import { useEffect, useState, useRef } from "react";

const page  = () => {
  const [language, setLanguage] = useState("en-IN");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
  });
  const [stepIndex, setStepIndex] = useState(0);
  const [listening, setListening] = useState(false);
  const hasSpokenRef = useRef(false);
  const voicesLoadedRef = useRef(false);
  const [voices, setVoices] = useState([]);

  const steps = ["name", "surname", "phone", "address"];
  const questionMap = {
    name: "What is your name?",
    surname: "What is your surname?",
    phone: "What is your contact number?",
    address: "What is your address?",
  };

  // Load voices safely
  useEffect(() => {
    const loadVoices = () => {
      const loadedVoices = speechSynthesis.getVoices();
      if (loadedVoices.length > 0) {
        voicesLoadedRef.current = true;
        setVoices(loadedVoices);
      } else {
        setTimeout(loadVoices, 100);
      }
    };

    // Trigger voice loading
    speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  const speak = (text) => {
    if (!voicesLoadedRef.current) return;

    const utterance = new SpeechSynthesisUtterance(text);
    let selectedVoice = null;

    if (language === "hi-IN") {
      selectedVoice = voices.find(
        (v) => v.lang === "hi-IN" && v.name.toLowerCase().includes("google")
      );
    } else if (language === "en-IN") {
      selectedVoice =
        voices.find((v) => v.lang === "en-IN" && v.name.includes("Microsoft Ravi")) ||
        voices.find((v) => v.lang === "en-IN");
    } else if (language === "bn-IN") {
      selectedVoice = voices.find((v) => v.lang === "en-IN");
      utterance.text = "Sorry, Bengali voice is not available. Please speak in English.";
    }

    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.lang = selectedVoice?.lang || language;

    speechSynthesis.cancel(); // clear previous
    speechSynthesis.speak(utterance);
  };

  const listen = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = language;

    const field = steps[stepIndex];

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setFormData((prev) => ({ ...prev, [field]: transcript }));

      recognition.stop();
      setTimeout(() => {
        hasSpokenRef.current = false;
        setStepIndex((prev) => prev + 1);
      }, 1000);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setListening(false);
    };

    recognition.onend = () => setListening(false);
    recognition.start();
  };

  // Ask + listen automatically per step
  useEffect(() => {
    if (stepIndex >= steps.length || !voicesLoadedRef.current) return;

    const field = steps[stepIndex];
    if (formData[field] || hasSpokenRef.current) return;

    hasSpokenRef.current = true;
    speak(questionMap[field]);

    const delay = setTimeout(() => {
      listen();
    }, 1500);

    return () => clearTimeout(delay);
  }, [stepIndex, voices]);

  const handleStart = () => {
    if (stepIndex === 0 && !listening && voicesLoadedRef.current) {
      hasSpokenRef.current = false;
      speak(questionMap[steps[stepIndex]]);
      setTimeout(() => {
        listen();
      }, 1500);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#e0d0b0",
        minHeight: "100vh",
        padding: 20,
        maxWidth: 400,
        margin: "auto",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      {/* Mic Button */}
      <button
        onClick={handleStart}
        disabled={listening || stepIndex >= steps.length || !voicesLoadedRef.current}
        style={{
          backgroundColor: "#50593b",
          borderRadius: "50%",
          width: 200,
          height: 200,
          margin: "0 auto 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor:
            listening || stepIndex >= steps.length ? "not-allowed" : "pointer",
          opacity: listening || stepIndex >= steps.length ? 0.6 : 1,
        }}
      >
        <img
          src="https://img.icons8.com/ios-filled/100/000000/microphone.png"
          alt="Mic"
          style={{
            filter: "invert(1)",
            width: 80,
            height: 80,
            animation: listening ? "pulse 1s infinite" : "none",
          }}
        />
      </button>

      {/* Question Prompt */}
      <div
        style={{
          background: "#d6c7a7",
          padding: 10,
          marginBottom: 20,
          fontSize: 16,
          fontStyle: "italic",
        }}
      >
        {stepIndex < steps.length && questionMap[steps[stepIndex]]}
      </div>

      {/* Form */}
      <div style={{ textAlign: "left" }}>
        <label>Name</label>
        <input value={formData.name} readOnly style={inputStyle} placeholder="Name" />

        <label>Surname</label>
        <input value={formData.surname} readOnly style={inputStyle} placeholder="Surname" />

        <label>Phone</label>
        <input value={formData.phone} readOnly style={inputStyle} placeholder="Phone" />

        <label>Address</label>
        <textarea
          value={formData.address}
          readOnly
          style={{ ...inputStyle, resize: "none" }}
          placeholder="Full Address"
          rows={3}
        />
      </div>

      {/* Language Selector */}
      <div style={{ marginTop: 20 }}>
        <label style={{ fontWeight: "bold" }}>Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ marginLeft: 10 }}
        >
          <option value="en-IN">English</option>
          <option value="hi-IN">Hindi</option>
          <option value="bn-IN">Bengali</option>
        </select>
      </div>
    </div>
  );
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  backgroundColor: "#fdfdfd",
};

export default page;
