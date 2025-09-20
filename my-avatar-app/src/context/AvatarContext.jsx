import { createContext, useState } from "react";

export const AvatarContext = createContext();

export function AvatarProvider({ children }) {
  const [avatarConfig, setAvatarConfig] = useState(null); // Stores the saved avatar

  return (
    <AvatarContext.Provider value={{ avatarConfig, setAvatarConfig }}>
      {children}
    </AvatarContext.Provider>
  );
}
