import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

function Settings({
  sessionLength,
  breakLength,
  handleIncrement,
  handleDecrement,
}) {
  return (
    <div id="settings">
      <div id="session" className="session-break">
        <div id="session-label" className="label">
          Session Length
        </div>
        <div id="session-length" className="length">
          {sessionLength}
        </div>
        <div className="dec-inc">
          <button
            id="session-increment"
            className="inc"
            onClick={() => handleIncrement("session")}
          >
            <FontAwesomeIcon icon={faCircleChevronUp} />
          </button>
          <button
            id="session-decrement"
            className="dec"
            onClick={() => handleDecrement("session")}
          >
            <FontAwesomeIcon icon={faCircleChevronDown} />
          </button>
        </div>
      </div>
      <div id="break" className="session-break">
        <div id="break-label" className="label">
          Break Length
        </div>
        <div id="break-length" className="length">
          {breakLength}
        </div>
        <div className="dec-inc">
          <button
            id="break-increment"
            className="inc"
            onClick={() => handleIncrement("break")}
          >
            <FontAwesomeIcon icon={faCircleChevronUp} />
          </button>
          <button
            id="break-decrement"
            className="dec"
            onClick={() => handleDecrement("break")}
          >
            <FontAwesomeIcon icon={faCircleChevronDown} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
