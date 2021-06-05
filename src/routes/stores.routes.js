const express = require("express")
const controller = require('../controllers/storesControllers')

const router = express.Router()

router.post('/', controller.createStore) //Cadastrar nova loja

router.get('/', controller.listStores) //Listar todas as lojas

router.patch("/:id", controller.updateStore) //Atualizar alguma informação de uma loja

router.delete('/:id', controller.deleteStore) //excluir uma loja do sistema

module.exports = router