import { useState } from "react";

const Country = ({ data, name, updateCountry }) => {
  const [stickers, setStickers] = useState(data);

  const updateSticker = (spot) => {
    const curr = stickers.find((e) => e.spot === spot);
    curr.value = !curr.value;
    setStickers((stickers) => [...stickers]);
    updateCountry(stickers, name);
  };

  return (
    <div className="buttonHolder">
      {stickers &&
        stickers.map((sticker) => {
          return (
            <div className="sticker" key={sticker.spot + name}>
              <label htmlFor={name + sticker.spot}>{sticker.spot}</label>
              <input
                id={name + sticker.spot}
                name={name + sticker.spot}
                type="checkbox"
                defaultChecked={sticker.value}
                onClick={() => updateSticker(sticker.spot)}
              />
            </div>
          );
        })}
    </div>
  );
};

export { Country };
