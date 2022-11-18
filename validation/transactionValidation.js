const Joi = require("joi");

function validateBuy(posts) {
  const Schema = Joi.object().keys({
    email: Joi.string().email().label("Email").max(50).required(),
    phoneNumber: Joi.string().label("Phone Number"),
    userName: Joi.string().label("Username").required(),
    payInCurrencyCode: Joi.string().label("Pay Currency Code").required(),
    payInCurrencyNetwork: Joi.string().label("Pay Currency Network").required(),
    receiveInCurrencyCode: Joi.string().label("Receive Currency Code").required(),
    receiveInCurrencyNetwork: Joi.string().label("Receive Currency Network").required(),
    orderAmount: Joi.number().label("Order Amount"),
    consumerDepositMethod: Joi.object().keys({
      paymentMethod: Joi.string().label("Consumer Payment Method"),
      paymentData: Joi.object().keys({
        accountName: Joi.string().label("Consumer Account Name"),
        accountNumber: Joi.string().label("Consumer Account Number"),
        bankName: Joi.string().label("Consumer Bank Name"),
      })
    }).required(),
    consumerReceiptMethod: Joi.object().keys({
      paymentMethod: Joi.string().label("ConsumerReceipt Payment Method"),
      paymentData: Joi.object().keys({
        walletAddress: Joi.string().label("ConsumerReceipt Wallet Address"),
        network: Joi.string().label("ConsumerReceipt Network"),
      })
    }).required(),
    
  });

  return Schema.validate(posts);
}


module.exports = {
  validateBuy
};
