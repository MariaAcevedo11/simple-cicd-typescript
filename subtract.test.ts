/**
 * Unit tests for subtract()
 * Cases: positive integers, zero cases, negative numbers
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches subtract to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  // Basic cases with positive integers
  describe("positive integers", () => {
    it("subtracts two positive numbers (larger - smaller)", () => {
      expect(window.subtract(5, 3)).toBe(2);
    });

    it("subtracts two positive numbers (smaller - larger)", () => {
      expect(window.subtract(3, 5)).toBe(-2);
    });

    it("subtracts equal positive numbers", () => {
      expect(window.subtract(10, 10)).toBe(0);
    });
  });

  // Cases with zero
  describe("cases with zero", () => {
    it("subtracts zero from a positive number", () => {
      expect(window.subtract(5, 0)).toBe(5);
    });

    it("subtracts a positive number from zero", () => {
      expect(window.subtract(0, 5)).toBe(-5);
    });

    it("subtracts zero from zero", () => {
      expect(window.subtract(0, 0)).toBe(0);
    });
  });

  // Cases with negative numbers
  describe("negative numbers", () => {
    it("subtracts negative from positive", () => {
      expect(window.subtract(5, -3)).toBe(8);
    });

    it("subtracts positive from negative", () => {
      expect(window.subtract(-5, 3)).toBe(-8);
    });

    it("subtracts two negative numbers", () => {
      expect(window.subtract(-5, -3)).toBe(-2);
    });

    it("subtracts negative from negative (result positive)", () => {
      expect(window.subtract(-3, -5)).toBe(2);
    });
  });
});
export {};