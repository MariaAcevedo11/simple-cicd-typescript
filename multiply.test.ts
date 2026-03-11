/**
 * Unit tests for multiply()
 * Cases: positive integers, zero cases, negative numbers
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  // Basic cases with positive integers
  describe("positive integers", () => {
    it("multiplies two positive numbers", () => {
      expect(window.multiply(3, 4)).toBe(12);
    });

    it("multiplies single digit by larger number", () => {
      expect(window.multiply(2, 25)).toBe(50);
    });

    it("multiplies equal positive numbers", () => {
      expect(window.multiply(7, 7)).toBe(49);
    });
  });

  // Cases with zero
  describe("cases with zero", () => {
    it("multiplies any number by zero", () => {
      expect(window.multiply(5, 0)).toBe(0);
    });

    it("multiplies zero by any number", () => {
      expect(window.multiply(0, 100)).toBe(0);
    });

    it("multiplies zero by zero", () => {
      expect(window.multiply(0, 0)).toBe(0);
    });
  });

  // Cases with negative numbers
  describe("negative numbers", () => {
    it("multiplies positive by negative", () => {
      expect(window.multiply(3, -4)).toBe(-12);
    });

    it("multiplies negative by positive", () => {
      expect(window.multiply(-5, 2)).toBe(-10);
    });

    it("multiplies two negative numbers (result positive)", () => {
      expect(window.multiply(-3, -4)).toBe(12);
    });
  });
});
export {};