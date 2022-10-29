import { createContext, useEffect, useState } from "react";

type ControlsType = {
  thumbColor: string;
  trackColor: string;
  widthStyle: string;
  width: number;
  borderRadius: number;
  borderWidth: number;
  borderStyle: string;
  borderColor: string;
};

type GlobalContextType = {
  style: string;
  controls: ControlsType;
  setControls: React.Dispatch<React.SetStateAction<ControlsType>>;
};

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [controls, setControls] = useState({
    thumbColor: "#3469a2",
    trackColor: "#ffffff",
    widthStyle: "auto",
    width: 16,
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#ffffff",
  });

  const style = `
    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
      scrollbar-width: ${controls.widthStyle};
      scrollbar-color: ${controls.thumbColor} ${controls.trackColor};
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: ${controls.width}px;
    }

    *::-webkit-scrollbar-track {
      background: ${controls.trackColor};
    }

    *::-webkit-scrollbar-thumb {
      background-color: ${controls.thumbColor};
      border-radius: ${controls.borderRadius}px;
      border: ${controls.borderWidth}px ${controls.borderStyle} ${controls.borderColor};
    }
  `;

  return (
    <GlobalContext.Provider
      value={{
        controls,
        setControls,
        style,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
