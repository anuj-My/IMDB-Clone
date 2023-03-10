import { createContext, useState } from "react";

export const TrailerContext = createContext();

const TrailerProvider = ({ children }) => {
    
  const [playTrailer, setPlayTrailer] = useState(false);
  const value = {playTrailer, setPlayTrailer};

  return (
    <TrailerContext.Provider value={value}>{children}</TrailerContext.Provider>
  );
};

export default TrailerProvider;
