import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ColorSelector from "./ColorSelector";
import ControlMenu from "./ControlMenu";
import ScrollbarBorderColor from "./ScrollbarBorderColor";
import ScrollbarThumb from "./ScrollbarThumb";
import ScrollbarTrack from "./ScrollbarTrack";

function ControlSection() {
  const { controls, setControls } = useContext(GlobalContext);
  const [showColorBox, setShowColorBox] = useState(false);
  const [thumbColor, setThumbColor] = useState(controls.thumbColor);

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    const styleValye: string | Number =
      name === "width" || name === "borderRadius" || name === "borderWidth"
        ? +value
        : value;

    setControls((prev) => {
      return {
        ...prev,
        [name]: styleValye,
      };
    });
  }

  useEffect(() => {
    setControls((prev) => {
      return {
        ...prev,
        thumbColor,
      };
    });
  }, [thumbColor]);

  return (
    <div className="flex flex-col justify-between border-solid border border-black lg:w-1/3 ">
      <div className="flex items-center justify-center">
        <h3 className="text-xl font-medium">CONTROLS</h3>
      </div>

      <ScrollbarThumb />
      <ScrollbarTrack />

      <ControlMenu title="Scrollbar Width Style">
        <select
          name="widthStyle"
          id=""
          value={controls.widthStyle}
          onChange={handleChange}
        >
          <option value="none">none</option>
          <option value="thin">thin</option>
          <option value="auto">auto</option>
        </select>
        <span>(Firefox only)</span>
      </ControlMenu>

      <ControlMenu title="Scrollbar Width">
        <input
          type="number"
          placeholder="px"
          name="width"
          id=""
          value={controls.width}
          onChange={handleChange}
          className="w-1/3  border border-solid border-b-black "
        />
        <span>px</span>
      </ControlMenu>

      <ControlMenu title="Scrollbar Border Radius">
        <input
          type="number"
          placeholder="px"
          name="borderRadius"
          id=""
          defaultValue={controls.borderRadius}
          onChange={handleChange}
          className="w-1/3  border border-solid border-b-black "
        />
        <span>px</span>
      </ControlMenu>

      <ControlMenu title="Scrollbar Border Width">
        <input
          type="number"
          placeholder="px"
          name="borderWidth"
          id=""
          defaultValue={controls.borderWidth}
          onChange={handleChange}
          className="w-1/3  border border-solid border-b-black "
        />
        <span>px</span>
      </ControlMenu>

      <ControlMenu title="Scrollbar Border Style">
        <select
          name="borderStyle"
          id=""
          value={controls.borderStyle}
          onChange={handleChange}
        >
          <option value="none">none</option>
          <option value="solid">solid</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
          <option value="ridge">Ridge</option>
          <option value="inset">Inset</option>
          <option value="outset">Outset</option>
        </select>
      </ControlMenu>

      <ScrollbarBorderColor />
    </div>
  );
}

export default ControlSection;
