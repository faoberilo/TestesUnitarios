export function transferWithTax(payer, receiver, transferAmount){
    if (transferAmount>0){
        payer.balance = payer.balance - transferAmount -100;
        receiver.balance = receiver.balance + transferAmount;
        return [payer, receiver]
    }else{
        throw new Error(`Invalid transfer amount: ${transferAmount}`)
    }
}