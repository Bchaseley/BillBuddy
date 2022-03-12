const userController = require('../controllers/user.controller');
const transController = require('../controllers/trans.controller');
const { } = require('../config/jwt.config');

module.exports = function(app){

    app.get('/', userController.index);

    //user routes
    app.post('/register', userController.register);
    app.post('/login', userController.login);
    app.get('/api/user',  userController.getUser);
    app.put('/api/user/:id',  userController.updateUser);
    app.delete('/api/user/:id',  userController.deleteUser);

    //trans routes
    app.post('/api/addTrans', transController.addTrans);
    app.get('/api/trans',  transController.getTrans);
    app.get('/api/allTrans', transController.getUserTrans)
    app.put('/api/trans/:id',  transController.updateTrans);
    app.delete('/api/trans/:id',  transController.deleteTrans);



}