import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { CardsGrid } from "../../src/components/CardsGrid/CardsGrid";

const mockPhrases = [
  { id: "1", description: "Hola mundo" },
  { id: "2", description: "Otra frase" },
];

vi.mock("react-redux", () => ({
  useSelector: (fn) => fn({ phrases: { phrases: mockPhrases } }),
}));

describe("<CardsGrid />", () => {
  it("renders all phrases", () => {
    render(<CardsGrid />);
    expect(screen.getByText("Hola mundo")).toBeInTheDocument();
    expect(screen.getByText("Otra frase")).toBeInTheDocument();
  });

  it("filters phrases by searchText", () => {
    render(<CardsGrid searchText="hola" />);
    expect(screen.getByText("Hola mundo")).toBeInTheDocument();
    expect(screen.queryByText("Otra frase")).toBeNull();
  });
});
