const sql = require('./db.js');

const Budget = function (budgetItem) {
    this.userId = budgetItem.userId;
    this.date = budgetItem.date;
    this.amount = budgetItem.amount;
};

/*Formats a budget item for easier logging */
Budget.toJSON = () => {
    return {
        userId: this.userId,
        date: this.date,
        amount: this.amount
    };
}

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
    })
}