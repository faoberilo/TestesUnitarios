export function transferInter(payer, receiver, transferAmount){
    var transferAmountTaxed = 0;
    
    if (transferAmount<5000){
        transferAmountTaxed = Math.round(transferAmount*1.05) + 100;
    } else {
        transferAmountTaxed = Math.round(transferAmount*1.1) + 100;
    }
    if (transferAmount>=1000 || transferAmount<=9999 || transferAmountTaxed<payer.balance){
        payer.balance = payer.balance - transferAmountTaxed;
        receiver.balance = receiver.balance + transferAmount;
        return [payer, receiver]
    }else{
        throw new Error(`Invalid transfer amount: ${transferAmount}`)
    }
    
}