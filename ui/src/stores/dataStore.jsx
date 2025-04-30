import { createContext, useContext, useState } from "react";

// 1. Create the context
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [emoji, setEmoji] = useState("@_@");

  const displayEmojiHandler = (emojiName) => {
    switch (emojiName) {
      case "happy":
        setEmoji(":)");
        break;
      case "unhappy":
        setEmoji(":(");
        break;
      case "throwTable":
        setEmoji("╯° · °)╯︵ ┻━┻");
        break;
      default:
        setEmoji("@_@");
        break;
    }
  };

  return (
    <DataContext.Provider value={{ emoji, displayEmojiHandler }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};