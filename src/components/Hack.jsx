import React, { useState, useEffect, useRef } from "react";
import hackVoice from "./Sounds/madness_of_hackers.mp3"; 
import "./HackerMode.css";

const messages = [
  "Initializing connection...",
  "Connecting to server at 192.168.0.1...",
  "Establishing secure tunnel...",
  "Fetching device information...",
  "Access granted: Device identified as 'Your Friend's Phone'",
  "Loading modules...",
  "Executing remote commands...",
  "Scanning files...",
  "Attempting to access front camera...",
  "Attempting to access microphone...",
  "Data streaming initialized...",
  "Connecting to external IP: 204.13.65.1...",
  "Uploading data to remote server...",
  "Connection established successfully.",
  "Monitoring all activity...",
  "Remote access activated. Hacker has full control.",
  "Transferring control to main server...",
  "STATUS: Online, monitoring enabled.",
];
function HackerMode() {
  const [consoleText, setConsoleText] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false); 
  const [isStarted, setIsStarted] = useState(false); 
  const audioRef = useRef(null); 
    

  useEffect(() => {
    const startProcess = () => {
      setIsStarted(true);
      audioRef.current.play(); 
      document.removeEventListener("click", startProcess); 
    };

    document.addEventListener("click", startProcess);

    return () => {
      document.removeEventListener("click", startProcess);
    };
  }, []);

  useEffect(() => {
    if (isConfirmed) return; 

    let index = 0;
    const showNextMessage = () => {
      if (index < messages.length && !isConfirmed) {
        setConsoleText((prevText) => prevText + messages[index] + "\n");

        index++;
        setTimeout(showNextMessage, Math.random() * 500 + 500);
      } else if (index >= messages.length) {
        setConsoleText((prevText) => prevText + "\nAll operations completed. Your device is now under control.\n");

        setTimeout(() => {
          const handleConfirmation = () => {
            const userConfirmed = window.confirm("Your phone is being hacked!");
            if (userConfirmed) {
              setIsConfirmed(true); 
              alert("Proceeding with hacking process...");
            } else {
              handleConfirmation(); 
            }
          };

          handleConfirmation();
        }, 1000);
      }
    };

    if (isStarted) {
      showNextMessage();
    }
  }, [isConfirmed, isStarted]); 

  return (
    <div className="parent">
      <h1>Connecting to remote device...</h1>
      <p className="text">{consoleText}</p>
      <audio ref={audioRef} loop>
        <source src={hackVoice} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default HackerMode;
