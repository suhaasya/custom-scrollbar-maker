import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ControlMenu from "./ControlMenu";
import ColorSelector from "./ColorSelector";

function ScrollbarTrack() {
  const { controls, setControls } = useContext(GlobalContext);
  const [showColorBox, setShowColorBox] = useState(false);
  const [trackColor, setTrackColor] = useState(controls.trackColor);

  useEffect(() => {
    setControls((prev) => {
      return {
        ...prev,
        trackColor,
      };
    });
  }, [trackColor]);

  return (
    <ControlMenu title="Scrollbar Track">
      <div
        className="relative w-8 h-8 "
        style={{ background: trackColor }}
        onClick={() => setShowColorBox((prev) => !prev)}
      >
        <div className={showColorBox ? "absolute top-8 z-10" : "hidden"}>
          <ColorSelector changeColor={setTrackColor} />
        </div>
      </div>
    </ControlMenu>
  );
}

export default ScrollbarTrack;
