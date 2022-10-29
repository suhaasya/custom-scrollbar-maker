import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function CodeSection() {
  const { style } = useContext(GlobalContext);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {}

  function copyCode() {
    navigator.clipboard.writeText(style);
    alert("Copied the text: " + style);
  }

  return (
    <div className="border-solid border border-black h-96 lg:h-full lg:w-1/3 text-center ">
      <textarea
        className="w-full h-[93%]"
        value={style}
        onChange={handleChange}
      />

      <button className="w-24 bg-green-600 p-1 rounded-sm" onClick={copyCode}>
        Copy Code
      </button>
    </div>
  );
}

export default CodeSection;
