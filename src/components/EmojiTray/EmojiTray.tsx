import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import "./EmojiTray.css";

// https://unpkg.com/emoji.json@13.1.0/emoji.json  potential dATA

const EmojiTray = () => {
  const [chosenEmoji, setChosenEmoji] = useState<any>(null);

  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
  };
  return (
    <>
      <div className="bcard">
        <header className="head">
          <h1>
            Enter your birthdate and we will tell you if your birthdate is a
            palindrome
          </h1>
        </header>
        <div>
          {chosenEmoji ? (
            <span>You chose: {chosenEmoji.emoji}</span>
          ) : (
            <span>No emoji Chosen</span>
          )}
          <EmojiPicker
            preload={true}
            native={true}
            onEmojiClick={onEmojiClick}
          />
        </div>

        <button onClick={() => {}}>CHECK</button>
      </div>
    </>
  );
};
export default EmojiTray;
