import { useState } from 'react'
import styles from '../styles/App.module.css'

const Country = ({ data, name, updateCountry }) => {
  const [stickers, setStickers] = useState(data)

  const updateSticker = (spot) => {
    const curr = stickers.find((e) => e.spot === spot)
    curr.value = !curr.value
    setStickers((stickers) => [...stickers])
    updateCountry(stickers, name)
  }

  return (
    <div className={styles.buttonHolder}>
      {stickers &&
        stickers.map((sticker) => {
          return (
            <div className={styles.sticker} key={sticker.spot + name}>
              <label
                className={styles.stickerLabel}
                htmlFor={name + sticker.spot}
              >
                {sticker.spot}
              </label>
              <input
                id={name + sticker.spot}
                name={name + sticker.spot}
                type="checkbox"
                defaultChecked={sticker.value}
                onClick={() => updateSticker(sticker.spot)}
              />
            </div>
          )
        })}
    </div>
  )
}

export { Country }
