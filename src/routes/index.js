const express = require("express")
const {author, version, description} = require('../../package.json')

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).json({
    titulo: "API de lojas preferidas da Lilit",
    mensagem: "bem vindes e aproveitem as dicas!",
    description,
    author,
    version
  })
})

module.exports = router