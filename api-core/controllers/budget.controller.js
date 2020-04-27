const Budget = require('../models/budget.model.js');


/* Create a new budget item in the database */
exports.newItem = (req, res) => {

    //Validate the request
    if (Object.keys(req.body).length === 0) {
        console.log(req)
        res.status(400).send({
            message: 'Body cannot be empty!'
        });

        return;
    }

    //Make a new budgetItem
    const budgetItem = new Budget({
        entryId: req.body.entryId,
        userId: req.body.userId,
        date: new Date(req.body.date),
        amount: req.body.amount
    });

    //Write it to the DB and check for errors
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

/* Find all budget items for a given user */
exports.getByEntryId = (req, res) => {

    //Validate the request
    if (!req.query.entryId) {
        console.log(req.params)
        res.status(400).send({
            message: 'Params cannot be empty!'
        });

        return;
    }

    let entryId = req.query.entryId;

    Budget.getByEntryId(entryId, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });

            return;
        }
        else {
            res.send(data)
        }
    });
};