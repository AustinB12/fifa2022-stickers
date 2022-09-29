const fs = require('fs')

export default async function handler(req, res) {
  await fs.writeFileSync('stickers.json', JSON.stringify(req.body))
  return res.status(200).json({})
}
