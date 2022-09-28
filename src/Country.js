import { useState } from "react";

const Country = ({ data, name }) => {
  const [stickers, setStickers] = useState(data);

  const updateSticker = (spot) => {
    const curr = stickers.find((e) => e.spot === spot);
    curr.value = !curr.value;
    setStickers((stickers) => [...stickers]);
  };

  return (
    <div className="buttonHolder">
      {stickers.map((sticker) => {
        return (
          <div key={sticker.spot + name}>
            <label htmlFor={name + sticker.spot}>{sticker.spot}</label>
            <input
              id={name + sticker.spot}
              name={name + sticker.spot}
              type="checkbox"
              value={sticker.value}
              onClick={() => updateSticker(sticker.spot)}
            />
          </div>
        );
      })}
    </div>
  );
};

export { Country };
