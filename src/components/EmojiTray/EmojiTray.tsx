import searchEmoji from "../data/data-by-emoji";
import { useState } from "react";
import EmojiPick from "../EmojiPick";
import "./EmojiTray.css";

// https://unpkg.com/emoji.json@13.1.0/emoji.json  potential dATA
//to use data
//https://github.com/muan/unicode-emoji-json/blob/main/data-by-group.json
//

const EmojiTray = () => {
  const [chosenEmoji, setChosenEmoji] = useState("");

  return (
    <>
      <div className="bcard">
        <header className="head">
          <h2>Select a Emoji from below or paste a emoji in Text Filed</h2>
        </header>
        <input
          className="input"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setChosenEmoji(e.target.value.trim());
          }}
          value={chosenEmoji}
          placeholder={" Paste a emoji here"}
        />
        {chosenEmoji && (
          <div>
            <span className="emoticon-display">{chosenEmoji}</span>
            <div className="msg">
              {searchEmoji[chosenEmoji]
                ? "This emoji represents " + searchEmoji[chosenEmoji].name + "."
                : "This emoji is not available in the current collection."}
            </div>
          </div>
        )}
        <EmojiPick setChosenEmoji={setChosenEmoji} />
      </div>
    </>
  );
};
export default EmojiTray;
