const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Add a new transaction
router.post('/', transactionController.addTransaction);

// Get all transactions
router.get('/', transactionController.getTransactions);

// Get a transaction by ID
router.get('/:id', transactionController.getTransactionById);

// Update a transaction by ID
router.put('/:id', transactionController.updateTransaction);

// Delete a transaction by ID
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
