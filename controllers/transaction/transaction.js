const { JsonResponse } = require("../../lib/apiResponse");
const { MSG_SUCCESS, MSG_TYPES, MSG_ERRORS, SUPPORTED_INTEGRATIONS } = require("../../constant/msg");
const Transaction = require("../../models/transaction");
const axios = require('axios');

exports.buy = async(req, res) => {
    try{
        const headers = {
            "secretKey": process.env.XENDBRIDGE_SECRETKEY
        }
        const response = await axios.post('https://canary.xendbridge.com/api/peertopeerorder/buy/initiate', req.body, {headers});
        let resp = response.data.data
        let payload = {
            orderReference: resp.orderReference,
            receiveInCurrencyCode: resp.receiveInCurrencyCode,
            payInCurrencyCode: resp.payInCurrencyCode,
            receivableAmount: resp.receivableAmount,
            payableAmount: resp.payableAmount,
            providerFirstName: resp.providerFirstName,
            providerLastName: resp.providerLastName,
            providerEmail: resp.providerEmail,
            initiatedAt: resp.initiatedAt,
            orderExpiryDate: resp.orderExpiryDate,
            initiatedAtTimeStamp: resp.initiatedAtTimeStamp,
            orderExpiryTimestamp: resp.orderExpiryTimeStamp,
            fundProviderAtTimeStamp: resp.fundProviderAtTimeStamp || null,
            fundCustomerAtTimeStamp: resp.fundCustomerAtTimeStamp || null,
            orderCompletedAtTimeStamp: resp.orderCompletedAtTimeStamp || null,
            p2POrderStatus: resp.p2POrderStatus,
            disputeStatus: resp.disputeStatus,
            orderType: resp.orderType,
            providerContact: {
                phoneNumber: resp.providerContact.phoneNumber,
                whatsappNumber: resp.providerContact.whatsappNumber
            },
            customerContact: {
                email: resp.customerContact.email,
                name: resp.customerContact.name,
                phoneNumber: resp.customerContact.phoneNumber
            },
            providerPaymentMethods: {
                paymentMethod: resp.providerPaymentMethods.paymentMethod,
                paymentType: resp.providerPaymentMethods.paymentType,
                paymentData: resp.providerPaymentMethods.paymentData,
                orderPaymentMethod: resp.providerPaymentMethods.orderPaymentMethod     
            },
            consumerDepositMethod: resp.consumerDepositMethod,
            consumerReceiptMethod: resp.consumerReceiptMethod,
            providerTransactionMetadata:  resp.providerTransactionMetadata

        }
        let newTransaction = new Transaction(payload);
        await newTransaction.save()
        return JsonResponse(res, 200, MSG_SUCCESS.BUY_ORDER_CREATED, newTransaction, null);
        
    } catch(error){
        console.log(error)
        JsonResponse(res, 500, MSG_TYPES.SERVER_ERROR, error, null);
    }
    
}