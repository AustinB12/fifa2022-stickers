const stickers = require('./stickers.json')
const fs = require('fs')

fs.writeFile('stickers.json', JSON.stringify({ test: 'test' }), (err) => {
  if (err) throw err
  console.log('Wrote to file I think')
})

export default function handler(req, res) {
  res.status(200).json(stickers)
}
