import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function Controls({ isRunning, handleStartPause, handleReset }) {
  let startStopIcon = "";

  if (isRunning === true) {
    startStopIcon = <FontAwesomeIcon icon={faPause} />;
  } else {
    startStopIcon = <FontAwesomeIcon icon={faPlay} />;
  }

  return (
    <div id="controls">
      <button id="start_stop" onClick={handleStartPause}>
        {startStopIcon}
      </button>
      <button id="reset" onClick={handleReset}>
        <FontAwesomeIcon icon={faArrowsRotate} />
      </button>
    </div>
  );
}

export default Controls;
