import { useState } from "react";
import { SketchPicker, SwatchesPicker } from "react-color";

type ColorSelectorProps = {
  changeColor: React.Dispatch<React.SetStateAction<string>>;
};

function ColorSelector(props: ColorSelectorProps) {
  const { changeColor } = props;

  const [color, setColor] = useState("#fff");

  function handleChange(color: any, event: any) {
    console.log(color.hex);
    setColor(color.hex);
    changeColor(color.hex);
  }

  return <SketchPicker color={color} onChange={handleChange} />;
}

export default ColorSelector;
