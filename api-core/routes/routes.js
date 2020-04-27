module.exports = app => {
    const budget = require('../controllers/budget.controller.js');

    app.post('/api/newItem', budget.newItem);

    //app.get('/api/getItemByEntryId/:entryid', budget.getByEntryId);

    //app.get('/api/getItemsByUserId/:userid', budget.getByUserId);
}