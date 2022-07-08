import { Account } from "../account";
import { transferWithTax } from "../transferWithTax";


describe('transferWithTax', ()=>{
    test('it should charge 100 from the payer account with 1000 for a 500 transfer to a receiver account with 0', ()=>{
         //Criação do cenário
         const payerAccount  = new Account(1, 1000);
         const receiverAccount = new Account(2, 0);
            //Execução
        const updatedAccounts = transferWithTax(payerAccount, receiverAccount, 500)

        //Asserts
        expect(updatedAccounts).toEqual(
            expect.arrayContaining([
                expect.objectContaining({id:1,balance:400}),
                expect.objectContaining({id:2,balance:500})
            ])
        )
 
    });

})