import { createContext, useState } from "react";

export const CastContext = createContext();

const CastProvider = ({ children }) => {
  const [movieCast, setMovieCast] = useState([]);

  const value = { movieCast, setMovieCast };
  return <CastContext.Provider value={value}>{children}</CastContext.Provider>;
};

export default CastProvider;
