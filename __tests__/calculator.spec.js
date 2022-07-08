import { sum, substract } from "../calculator";

describe('calculator sum',()=>{
    test("it should sum two positive values", ()=>{
        const result = sum(2,2);
        expect(result).toBe(4)
    });
});

describe('calculator substract',()=>{
    test("it should substract two positive values", ()=>{
        const result = substract(2,2);
        expect(result).toBe(0)
    });
});