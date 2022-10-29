import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ControlMenu from "./ControlMenu";
import ColorSelector from "./ColorSelector";

function ScrollbarThumb() {
  const { controls, setControls } = useContext(GlobalContext);
  const [showColorBox, setShowColorBox] = useState(false);
  const [thumbColor, setThumbColor] = useState(controls.thumbColor);

  useEffect(() => {
    setControls((prev) => {
      return {
        ...prev,
        thumbColor,
      };
    });
  }, [thumbColor]);

  return (
    <ControlMenu title="Scrollbar Thumb">
      <div
        className="relative w-8 h-8 "
        style={{ background: thumbColor }}
        onClick={() => setShowColorBox((prev) => !prev)}
      >
        <div className={showColorBox ? "absolute top-8 z-10" : "hidden"}>
          <ColorSelector changeColor={setThumbColor} />
        </div>
      </div>
    </ControlMenu>
  );
}

export default ScrollbarThumb;
