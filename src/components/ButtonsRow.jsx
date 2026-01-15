import React, { useState } from "react";
import "./Button.css";
import Button from "./Button";

// This component reuses the visual Button but lays out 5 of them horizontally.
const ButtonsRow = () => {
  const [selectedFeeling, setSelectedFeeling] = useState("");

  const messages = {
    "Sad": "I know tko acha nhi lg rha hai pr it's okay ye temporary hai everything will be alright and if you feel you want to talk just msg/call me yaad rkhna mai hu tere liye...",
    "Missing Me": "Mko bhi teri yaad aa rhi koi nhi apn jayda din thodi dur rhe skte hai thodu sa wait kro apn bhot jald milenge aur ye wait krne ke liye mere tarf se tumko ek choclate😁",
    "Angry": "ya to kisi ne kuch chutiyap kiya hai ya maine hi kiya hai mai bhot baar sahi words nhi bol pata hu ya tko assure nhi kr pata hu pr bas yaad rkhna mere liye sbse jayda matter tu hi krti hai....aur lambi saas le log chutiya hi hote hai",
    "Happy": "hehehe bhot badhiya aise hi khus rhete rho tum khus hum khus hehehe",
  };

  const handleClick = (label) => {
    setSelectedFeeling(label);
  };

  return (
    <div className="buttons-row-container">
      <div>
        <h2 className="buttons-row-title">Whenever you feel...</h2>
        <div className="buttons-row">
          <Button title="Sad" onClick={() => handleClick("Sad")} />
          <Button title="Missing Me" onClick={() => handleClick("Missing Me")} />
          <Button title="Angry" onClick={() => handleClick("Angry")} />
          <Button title="Happy" onClick={() => handleClick("Happy")} />
        </div>
        {selectedFeeling && (
          <div className="buttons-message">
            {messages[selectedFeeling] || "Whenever you feel anything, remember I'm here for you."}
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonsRow;
