import { createContext, useState } from "react";

export const SectionContext = createContext();

const SectionContextProvider = ({ children }) => {
  const [value, setValue] = useState("home");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <SectionContext.Provider value={{ value, changeValue }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionContextProvider;