const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid").v1;
var Float = require("mongoose-float").loadType(mongoose);

const transactionSchema = new mongoose.Schema(
    {
        orderReference: {
            type: String,
            required: true,
            unique: true
        },
        receiveInCurrencyCode: {
            type: String,
            required: true
        },
        payInCurrencyCode: {
            type: String,
            required: true
        },
        receivableAmount: {
            type: Float,
        },
        payableAmount: {
            type: Number,
        },
        // providerName: {
        //     type: String
        // },
        providerFirstName: {
            type: String
        },
        providerLastName: {
            type: String
        },
        providerEmail: {
            type: String
        },
        initiatedAt: {
            type: String
        },
        orderExpiryDate:{
            type: String
        },
        initiatedAtTimeStamp: {
            type: Date
        },
        orderExpiryTimeStamp:{
            type: Date
        },
        fundProviderAtTimeStamp: {
            type: Date
        },
        fundCustomerAtTimeStamp: {
            type: Date
        },
        orderCompletedAtTimeStamp: {
            type: Date
        },
        p2POrderStatus: {
            type: String
        },
        disputeStatus: {
            type: String
        },
        orderType: {
            type: String
        },
        providerContact: {
            phoneNumber: {
                type: String
            },
            whatsappNumber: {
                type: String
            }
        },
        customerContact: {
            email: {
                type: String
            },
            name: {
                type: String
            },
            phoneNumber: {
                type: String
            }
        },
        providerPaymentMethods: {
            paymentMethod: {
                type: String
            },
            paymentType: {
                type: String
            },
            paymentData: {
                type: mongoose.SchemaTypes.Mixed
                // bankName: {
                //     type: String
                // },
                // accountNumber: {
                //     type: String
                // },
                // accountName: {
                //     type: String
                // },
                // currency: {
                //     type: String
                // }
            },
            orderPaymentMethod: {
                type: mongoose.SchemaTypes.Mixed
            }
        },
        consumerDepositMethod: {
            type: mongoose.SchemaTypes.Mixed
        },
        consumerReceiptMethod: {
            type: mongoose.SchemaTypes.Mixed
        },
        providerTransactionMetadata: {
            type: mongoose.SchemaTypes.Mixed
        }
    },
    { timestamps: true }
);

const Transaction = mongoose.model('transactions', transactionSchema)
module.exports = Transaction;
