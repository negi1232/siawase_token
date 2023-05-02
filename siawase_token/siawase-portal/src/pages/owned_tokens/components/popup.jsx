import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
const PopupDiv = ({  children,set_active_token }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const set_target_tokenId = () => {}

  return (
    <div
      onMouseEnter={() => togglePopup()}
      onMouseLeave={() => togglePopup()}
      style={{ position: "relative" }}
    >
      {children}
      {showPopup ? (
            <div style={{"width":"100%","height":"100%" , "position": "absolute",top:"100%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Button variant="primary" onClick={() =>set_active_token()} >
                トークンを贈る
            </Button>
          </div>
      ) : null}
    </div>
  );
};

export default PopupDiv;