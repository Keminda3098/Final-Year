const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  
    id:{
        type : String,
        required: true,
        unique: true,
    },
    cat_name: {
        type: String,
        required:true
    },
    Importered_Country:{
        type: String,
        required:true
    },
    itemType: {
        type: String,
        required:true
    },
    itemCreatedName:{
        type:String,
    },
    item_name: {
        type: String,
        required:true
    },
     quantity: {
        type: Number,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    
    selling_price: {
        type: Number,
        required:true
    },
    sub_cat: {
        type: String,
        required:true
    },
    image: {
        type: String,
        
    },
    expDate: {
        type: String,
        
    },
    quantity: {
        type:Number,
        required:true
       
    },
    createdDate: {
        type: Date,
        default: Date.now

    },

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('ItemData', schema);