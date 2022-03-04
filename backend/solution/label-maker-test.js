const labelmaker = require("./labelmaker");

describe("labelmaker", () => {
    it("1", () => {
        const result = labelmaker(1);
        expect(result).toBe("A");
    });

    it("27", () => {
        const result = labelmaker(27);
        expect(result).toBe("AA");
    });

    it("100", () => {
        const result = labelmaker(100);
        expect(result).toBe("CV");
    });

    /** I also added further test cases in here that are not in the problem description */
    it("0", () => {
        const result = labelmaker(0);
        expect(result).toBe("");
    });

    it("676", () => {
        const result = labelmaker(676);
        expect(result).toBe("Z");
    });

    it("677", () => {
        const result = labelmaker(677);
        expect(result).toBe("ZA");
    });
})