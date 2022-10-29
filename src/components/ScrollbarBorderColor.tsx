import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ControlMenu from "./ControlMenu";
import ColorSelector from "./ColorSelector";

function ScrollbarBorderColor() {
  const { controls, setControls } = useContext(GlobalContext);
  const [showColorBox, setShowColorBox] = useState(false);
  const [borderColor, setBorderColor] = useState(controls.borderColor);

  useEffect(() => {
    setControls((prev) => {
      return {
        ...prev,
        borderColor,
      };
    });
  }, [borderColor]);

  return (
    <ControlMenu title="Scrollbar Border Color">
      <div
        className="relative w-8 h-8 "
        style={{ background: borderColor }}
        onClick={() => setShowColorBox((prev) => !prev)}
      >
        <div className={showColorBox ? "absolute top-8 z-10" : "hidden"}>
          <ColorSelector changeColor={setBorderColor} />
        </div>
      </div>
    </ControlMenu>
  );
}

export default ScrollbarBorderColor;
