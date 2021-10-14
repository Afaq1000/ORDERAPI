'use strict';
module.exports = function(app) {
  let order = require('../controllers/orderController');

  // Order Routes
  try{
    app.route('/order')
    .get(order.list_all_tasks)
    .post(order.create_a_task);
  }
  catch(error)
  {
    console.log(error);
  }

 


  app.route('/order/:orderId')
    .get(order.read_a_task)
    .put(order.update_a_task)
    .delete(order.delete_a_task);
};
