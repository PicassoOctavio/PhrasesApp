import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "../src/components/SearchBar/SearchBar";
import { describe, it, vi, expect, beforeEach, afterEach } from "vitest";

/* vi.useFakeTimers(); */

vi.mock("@mui/icons-material", () => ({
  Search: () => <span>SearchIcon</span>,
}));

describe("<SearchBar />", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("debounces input before calling setSearchTerm", () => {
    const mockSet = vi.fn();
    render(<SearchBar setSearchTerm={mockSet} />);

    const input = screen.getByRole("textbox", { name: "search-input" });
    fireEvent.change(input, { target: { value: "fra" } });
    expect(mockSet).not.toHaveBeenCalled();

    /* vi.advanceTimersByTime(400); */
    expect(mockSet).toHaveBeenCalledWith("fra");
  });
});
