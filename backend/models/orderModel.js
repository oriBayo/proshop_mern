import mongoose from 'mongoose'

const orderSchme = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    orderItems : [
        {
            name:{type: String, required : true},
            qty:{type: Number, required : true},
            image:{type: String, required : true},
            price:{type: Number, required : true},
            product:{
                type: mongoose.Schema.Types.ObjectId,
                required : true,
                ref : 'Product'
            }
        }
    ],
    shipingAdress:{
        address : {type: String, required : true},
        city : {type: String, required : true},
        postalCode : {type: String, required : true},
        country : {type: String, required : true},
    },
    paymentMethods:{
        type:String,
        required : true,
    },
    paymentResult : {
        id: {type:String,required:true},
        status: {type:String,required:true},
        update_time: {type:String,required:true},
        email_address: {type:String,required:true},
    },
    taxPrice:{
        type : Number,
        required : true,
        defualt : 0.0
    },
    shipingPrice:{
        type : Number,
        required : true,
        defualt : 0.0
    },
    isPaid:{
        type : Boolean,
        required : true , 
        default : false
    },
    paidAt : {
        type: Date
    },
    idDelivered:{
        type : Boolean,
        required : true,
        default : false
    },
    deliveredAt:{
        type:Date
    }    
},{
    timestamps : true
})

const Order = mongoose.model('Order',orderSchme)

export default Order