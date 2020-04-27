const sql = require('./db.js');

const Budget = function (budgetItem) {
    this.entryId = budgetItem.entryId;
    this.userId = budgetItem.userId;
    this.date = budgetItem.date;
    this.amount = budgetItem.amount;
};

/*Formats a budget item for easier logging */
Budget.toJSON = () => {
    return {
        entryId: this.entryId,
        userId: this.userId,
        date: this.date,
        amount: this.amount
    };
};

/*Given a Budget object, creates a new budget item
 * in our database */
Budget.create = (newBudget, callback) => {
    sql.query('INSERT INTO budgetee SET ?', newBudget, (err, res) => {
        if (err) {
            console.log('Error: ', err);
            callback(err, null);
            return;
        }

        let newBudgetObj = newBudget.toJSON();
        console.log('Created new budget item with: ', newBudgetObj);
        callback(null, newBudgetObj);
    });
};

/* Given a userId, find all the budget entries 
 * made by that user */
Budget.findByUserId = (userId, callback) => {
    sql.query('SELECT * FROM budgetee WHERE userid=?', [userId], (err, res) => {
        if (err) {
            console.log('Error: ', err);
            callback(err, null);
            return;
        }

        //If there are any matching entries
        if (res.length > 0) {
            console.log('Retrieved entries for user with id: ', userId);
            callback(null, res);
        }

        console.log('No entries for user with id: ', userId);
        callback(null, null);
    });
};

/* Given an entryId find the budget entry with
 * that given id */
Budget.findByEntryId = (entryId, callback) => {
    sql.query('SELECT * FROM budgetee WHERE entryid=?', [entryId], (err, res) => {
        if (err) {
            console.log('Error: ', err);
            callback(err, null);
            return;
        }

        //If there are any matching entries
        if (res.length > 0) {
            console.log('Retrieved entry with id: ', entryId);
            callback(null, res[0]);
        }

        console.log('No entries with id: ', entryId);
        callback(null, null);
    });
};