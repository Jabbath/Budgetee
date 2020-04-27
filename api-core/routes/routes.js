module.exports = app => {
    const budget = require('../controllers/budget.controller.js');

    app.post('/api/newItem', budget.createItem);

    app.get('/api/getItemByEntryId/:entryid', budget.getByEntryId);

    app.get('/api/getItemsByUserId/:userid', budget.getByUserId);
}