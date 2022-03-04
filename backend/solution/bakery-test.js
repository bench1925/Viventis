const bakery = require("./bakery");

describe("bakery", () => {
    it("10 VS5", () => {
        const result = bakery("10 VS5");
        expect(result).toStrictEqual({ combination: [5, 5], price: 17.98 });
    });

    // it("14 MB11", () => {
    //     const result = bakery("14 MB11");
    //     expect(result).toStrictEqual({ combination: [5, 5, 2, 2], price: 51.88 });
    //     expect(result).toStrictEqual({ combination: [8, 2, 2, 2], price: 54.8 });
    // });

    it("13 CF", () => {
        const result = bakery("13 CF");
        expect(result).toStrictEqual({ combination: [5, 5, 3 ], price: 25.85 });
    });
});