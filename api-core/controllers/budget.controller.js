const Budget = require('../models/budget.model.js');

exports.newItem = (req, res) => {

    //Validate the request
    if (Object.keys(req.body).length === 0) {
        console.log(req)
        res.status(400).send({
            message: 'Body cannot be empty!'
        });

        return;
    }

    const budgetItem = new Budget({
        entryId: req.body.entryId,
        userId: req.body.userId,
        date: new Date(req.body.date),
        amount: req.body.amount
    });

    console.log(budgetItem);

    Budget.create(budgetItem, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        else {
            res.send(data);
        }
   
    });
};