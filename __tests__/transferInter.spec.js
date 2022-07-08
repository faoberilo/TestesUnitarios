import { Account } from "../account";
import { transferInter } from "../transferInter";


describe('transferInter', ()=>{
    test('it should charge 100 plus 5% from the payer account with 10000 for a 1000 transfer to a receiver account with 0', ()=>{
         //Criação do cenário
         const payerAccount  = new Account(1, 10000);
         const receiverAccount = new Account(2, 0);
            //Execução
        const updatedAccounts = transferInter(payerAccount, receiverAccount, 1000)

        //Asserts
        expect(updatedAccounts).toEqual(
            expect.arrayContaining([
                expect.objectContaining({id:1,balance:8850}),
                expect.objectContaining({id:2,balance:1000})
            ])
        )
 
    });
    test('it should charge 100 plus 10% from the payer account with 10000 for a 6000 transfer to a receiver account with 0', ()=>{
        //Criação do cenário
        const payerAccount  = new Account(1, 10000);
        const receiverAccount = new Account(2, 0);
           //Execução
       const updatedAccounts = transferInter(payerAccount, receiverAccount, 6000)

       //Asserts
       expect(updatedAccounts).toEqual(
           expect.arrayContaining([
               expect.objectContaining({id:1,balance:3300}),
               expect.objectContaining({id:2,balance:6000})
           ])
       )

   });

})