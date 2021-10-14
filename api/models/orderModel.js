
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'customer_name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  fulfilment_status: {
    type: [{
      type: String,
      enum: ['fullfilled', 'Unfulfilled','pending']
    }],
    default: ['pending']
  },
  payment_status: {
    type: [{
      type: String,
      enum: ['paid', 'Unpaid','pending']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
