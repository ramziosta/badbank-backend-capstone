 const mongoose = require('mongoose')

 const User = new mongoose.Schema(
     {
         Id: { type: String, required: true },
         user: { type: String, required: true },
         email: { type: String, required: true, unique: true },
         pwd: { type: String, required: true },
         accountType: { type: String , required: true },
         encryptedPwd: {type: String, required: true},
         accounts: {type: Schema.ObjectId, ref: "account", required: true},
         //Embedded sub-document
         detail:{ accountNumber: Number, routingNumber: Number}
     },
     { collection: 'user-data' }
 )
 
 const account = new mongoose.Schema(
    {
        Id: { type: String, required: true },
        user: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        pwd: { type: String, required: true },
        accountType: { type: String , required: true },
        encryptedPwd: {type: String, required: true},
        transactions: {type: Schema.ObjectId, ref: "transaction", required: true},
        //Embedded sub-document
        detail:{ accountNumber: Number, routingNumber: Number}
    },
    { collection: 'accounts' }
)

// const transactions = new mongoose.Schema(
//     {
//         Id: { type: String, required: true },
//         user: { type: String, required: true },
//         accountNumber: { type: Number , required: true },
//         accountType: { type: String , required: true },
//         transactions: {type: Schema.ObjectId, ref: "transaction", required: true},
//         //Embedded sub-document
//         detail:{ accountNumber: Number, routingNumber: Number}
//     },
//     { collection: 'transactions' }
// )
// const transaction = new mongoose.Schema(
//     {
//         Id: { type: String, required: true },
//         user: { type: String, required: true },
//         accountNumber: { type: Number , required: true },
//         accountType: { type: String , required: true },
//         transactionDate: { type: Date , required: true},
//         //Embedded sub-document
//         detail:{ accountNumber: Number, routingNumber: Number}
//     },
//     { collection: 'transaction' }
// )

//  const model = mongoose.model('UserData', User)
 
//  module.exports = model



 