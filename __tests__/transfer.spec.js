// Criação de um cenário de teste
// Execução do que está semdp testado
// Asserts

import { Account } from "../account";
import { transfer } from "../transfer";

describe("transfer", ()=>{
    test("it should transfer 500 from an account with 1000 to another with 0",()=>{
        //Criação do cenário
        const payerAccount  = new Account(1, 1000);
        const receiverAccount = new Account(2, 0);

        //Execução
        const updatedAccounts = transfer(payerAccount, receiverAccount, 500)

        //Asserts
        expect(updatedAccounts).toHaveLength(2);
        expect(updatedAccounts).toEqual(
            expect.arrayContaining([
                expect.objectContaining({id:1,balance:500}),
                expect.objectContaining({id:2,balance:500})
            ])
        )
    })
    test("it should throw an error when amount is negative",()=>{
        //Criação do cenário
        const payerAccount  = new Account(1, 1000);
        const receiverAccount = new Account(2, 1000);

        //Execução
        const updatedAccounts = ()=> {transfer(payerAccount, receiverAccount, 0)}

        //Asserts
        expect(updatedAccounts).toThrow(Error(`Invalid transfer amount: 0`))
    });
});