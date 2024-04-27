import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterApp } from ".";

describe("Counter App Test", () => {
  // Arrangement => Render Component
  render(<CounterApp />);
  // Actor => Actor yang dicari
  // Assertion => Expectation

  // 1. ada counter number inital value = 0
  it("1. There is a counter Number, initial value should 0", () => {
    const counter = screen.getByRole("counter");
    expect(counter.textContent).toEqual("0");
  });

  // 2. ada increment button
  it("2. There is an increment Button", () => {
    const incBtn = screen.getByRole("incBtn");
  });

  // 3. ada decrement button
  it("3. There is an decrement Button", () => {
    const decBtn = screen.getByRole("decBtn");
  });

  // 4. ketika incBtn di klik 1x maka counter number = 1
  it("4. If incBtn had clicked once, counter number should 1", async () => {
    const incBtn = screen.getByRole("incBtn");
    await userEvent.click(incBtn);
    const counter = screen.getByRole("counter");
    expect(counter.textContent).toEqual("1");
  });

  // 5. ketika decBtn di klik 1x maka counter number = 0
  it("5. If decBtn had clicked once, counter number should 0", async () => {
    const incBtn = screen.getByRole("decBtn");
    await userEvent.click(incBtn);
    const counter = screen.getByRole("counter");
    expect(counter.textContent).toEqual("0");
  });

  // 6. ketika incBtn di klik 2x maka counter number = 2
  it("6. If incBtn had clicked twice, counter number should be 2", async () => {
    const incBtn = screen.getByRole("incBtn");
    await userEvent.click(incBtn);
    await userEvent.click(incBtn);
    const counter = screen.getByRole("counter");
    expect(counter.textContent).toEqual("2");
  });

  // 7. ketika decBtn di klik 3x maka counter number = 0
  it("7. If decBtn had clicked 3x, counter number should be 0 (We limit the minimum number to 0)", async () => {
    const decBtn = screen.getByRole("decBtn");
    await userEvent.click(decBtn);
    await userEvent.click(decBtn);
    await userEvent.click(decBtn);
    const counter = screen.getByRole("counter");
    expect(counter.textContent).toEqual("0");
  });
});
