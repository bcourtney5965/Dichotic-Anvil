var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  _item : {type: Number, ref : 'User' },
  itemName : String,
  borrowed : Boolean,
  picture: {type: Schema.Types.Mixed},
  morePictures: Schema.Types.Mixed, // this is not required
  createdAt: {type: Date, default: Date.now}
});

itemSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
//Create a model using the schema
var Item = mongoose.model('Item', itemSchema);
module.exports = Item;

