// import probabilityOfOutcome from "./probabilityOfOutcome";
const probabilityOfOutcome = require('./probabilityOfOutcome')

describe('probabilityOfOutcome', () => {
    test('expect 0', () => {
        expect(probabilityOfOutcome(0, 0)).toBe(0);
    });
})