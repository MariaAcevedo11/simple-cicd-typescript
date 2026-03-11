/**
 * Unit tests for divide()
 * Cases: positive integers, zero cases, negative numbers, division by zero limit case
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches divide to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  // Basic cases with positive integers
  describe("positive integers", () => {
    it("divides two positive numbers (exact result)", () => {
      expect(window.divide(10, 2)).toBe(5);
    });

    it("divides resulting in decimal", () => {
      expect(window.divide(7, 2)).toBe(3.5);
    });

    it("divides smaller by larger number", () => {
      expect(window.divide(1, 4)).toBe(0.25);
    });

    it("divides equal positive numbers", () => {
      expect(window.divide(9, 9)).toBe(1);
    });
  });

  // Cases with zero
  describe("cases with zero", () => {
    it("divides zero by any positive number", () => {
      expect(window.divide(0, 5)).toBe(0);
    });

  });

  // Cases with negative numbers
  describe("negative numbers", () => {
    it("divides positive by negative", () => {
      expect(window.divide(10, -2)).toBe(-5);
    });

    it("divides negative by positive", () => {
      expect(window.divide(-10, 2)).toBe(-5);
    });

    it("divides two negative numbers (result positive)", () => {
      expect(window.divide(-10, -2)).toBe(5);
    });

    it("divides resulting in negative decimal", () => {
      expect(window.divide(-7, 2)).toBe(-3.5);
    });
  });

  // Limit cases - Division by zero
  describe("division by zero limit case", () => {
    it("throws error when dividing positive by zero", () => {
      expect(() => {
        window.divide(5, 0);
      }).toThrow("Cannot divide by zero");
    });

    it("throws error when dividing negative by zero", () => {
      expect(() => {
        window.divide(-5, 0);
      }).toThrow("Cannot divide by zero");
    });

    it("throws error when dividing zero by zero", () => {
      expect(() => {
        window.divide(0, 0);
      }).toThrow("Cannot divide by zero");
    });
  });
});
export {};