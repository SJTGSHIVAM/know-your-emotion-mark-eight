import { Dispatch, SetStateAction, useState } from "react";
import data, { GroupList } from "../data/data-by-group";
import "./EmojiPick.css";

const EmojiPick = ({
  setChosenEmoji,
}: {
  setChosenEmoji: Dispatch<SetStateAction<string>>;
}) => {
  const [selectedTray, setSelectedTray] = useState("Smileys & Emotion");
  return (
    <>
      <div className="smallcard max-width-220">
        <div className="icon-tray max-width-220">
          {GroupList.map((i) => {
            // console.log(i, data[i][0].emoji);
            // let x = String(i);
            return (
              <>
                <span
                  className={
                    "icon-tile " + (selectedTray == i ? "highlight" : "")
                  }
                  onClick={() => {
                    setSelectedTray(i);
                  }}
                >
                  {data[i][0].emoji}
                </span>
              </>
            );
          })}
        </div>
        <div className="icon-palette">
          {data[selectedTray].map((i) => {
            //   console.log(i, i.emoji);
            return (
              <span
                className="emoticon-display"
                onClick={() => {
                  setChosenEmoji(i.emoji);
                }}
              >
                {" "}
                {i.emoji}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EmojiPick;
