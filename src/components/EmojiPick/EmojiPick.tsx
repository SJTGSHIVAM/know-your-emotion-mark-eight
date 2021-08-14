import data from "../data/data-by-group";
const EmojiPick = () => {
  return;
  <>
    {data["Smileys & Emotion"].map((i) => {
      <span className="emoticon-display">{i.emoji}</span>;
    })}
  </>;
};

export default EmojiPick;
