const express = require('express');
const router = express.Router();


const PedidosController = require('../controllers/pedidos-controller');

//GET- retorna todos os pedidos
router.get('/', PedidosController.getPedidos );

//insere um pedido
router.post('/',  PedidosController.postPedidos);

// Retorna um pedido pelo id
router.get('/:id_pedido', PedidosController.getUmPedido );

//Remover um pedido
router.delete('/', PedidosController.deletePedido);

module.exports = router;