import { useState } from "react";

export const useInputKeyCatch = () => {
  const [key, setKey] = useState<string>("");
  document.addEventListener("keydown", (event) => {
    setKey(event.key);
  });

  document.addEventListener("keyup", (event) => {
    setKey("");
  });

  return { key };
};
