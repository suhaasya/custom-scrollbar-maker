import { useContext } from "react";
import { toast } from "react-toastify";
import { GlobalContext } from "../context/GlobalContext";

function CodeSection() {
  const { style } = useContext(GlobalContext);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {}

  function copyCode() {
    navigator.clipboard.writeText(style);
    toast.success("code copied");
  }

  return (
    <div className="border border-solid border-gray h-96 lg:h-full lg:w-1/3 text-center ">
      <textarea
        className="w-full h-[93%]"
        value={style}
        onChange={handleChange}
      />

      <button
        className="px-4 py-1 text-white bg-blue hover:bg-blue_dark rounded-md"
        onClick={copyCode}
      >
        Copy Code
      </button>
    </div>
  );
}

export default CodeSection;
