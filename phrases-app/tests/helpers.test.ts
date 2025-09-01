import { describe, it, expect } from "vitest";
import { escapeRegExp } from "../src/helpers/validator";

describe("escapeRegExp util", () => {
  it("escapes regex special chars", () => {
    expect(escapeRegExp("hola.*+?^${}()|[]\\")).toBe(
      "hola\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\"
    );
  });
});
